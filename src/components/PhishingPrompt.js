import React, { useState, useEffect, useRef } from 'react';
import "../assets/styles/components.css";

const PhishingPrompt = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const prompt = `Generate a realistic phishing email template for a security awareness campaign. Target theme: ${input}`;

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      const data = await res.json();
      const fullText = data.choices[0]?.message?.content || 'No response received.';

      // Placeholder empty assistant message for typing
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
      
      let index = 0;
      const interval = setInterval(() => {
        setMessages((prev) => {
          const updated = [...prev];
          const lastMessage = { ...updated[updated.length - 1] }; // clone properly
          if (lastMessage.role === 'assistant') {
            lastMessage.content += fullText.charAt(index);
            updated[updated.length - 1] = lastMessage; // reassign the updated message
          }
          return updated;
        });
        index++;
        if (index >= fullText.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 15);

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Error generating template.' },
      ]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="phishing-container">
      <h1 className="phishing-title">Welcome to PhishGPT! Enter a prompt to create your campaign template.</h1>
      <div className="phishing-input">
        <input
          className="phishing-input"
          placeholder="Make me a phishing email about ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="phishing-submit-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <div className="spinner"></div> : '➤'}
        </button>
      </div>

      <div className="chat-feed end_of_page_margins">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.role === 'user' ? 'user' : 'assistant'} fade-in`}
          >
            <p>{msg.content}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default PhishingPrompt;