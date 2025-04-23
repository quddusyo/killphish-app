import React, { useState, useRef } from "react";
import { TrainingData } from "../assets/data/TrainingData";
import { IntroTrainingData } from "../assets/data/IntroTrainingData";
import CertificateTemplate from "./CertificateTemplate";
import html2pdf from "html2pdf.js";


const QuizComponent = () => {
    const [userName, setUserName] = useState("");
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizPassed, setQuizPassed] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [introIndex, setIntroIndex] = useState(0);
    const [introCompleted, setIntroCompleted] = useState(false);
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [loading, setLoading] = useState(false);
    
    const certificateRef = useRef();

    const totalQuestions = TrainingData.length;
    const passingScore = 70; // Minimum percentage to pass
    const currentQuestion = TrainingData[currentQuestionIndex];

    const handleAnswer = (answer) => {
        if (showFeedbackModal) return;
        setSelectedAnswer(answer);
        setShowFeedback(true);
        setShowFeedbackModal(true);
        if (answer === currentQuestion.answer) {
            setCorrectAnswers((prev) => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        setShowFeedbackModal(false);
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            const finalScore = (correctAnswers / totalQuestions) * 100;
            if (finalScore >= passingScore) {
                setQuizPassed(true);
            }
            setQuizCompleted(true);
        }
    };

    const generateCertificatePDF = () => {
        return new Promise((resolve, reject) => {
            const element = document.getElementById("certificate");
            const opt = {
                margin: 0,
                filename: `${userName}_CPAT+.pdf`,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 4, useCORS: true },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            };

            html2pdf()
                .from(element)
                .set(opt)
                .outputPdf("datauristring")
                .then((pdfBase64) => {
                    const base64 = pdfBase64.split(",")[1]; // remove data: prefix
                    resolve(base64);
                })
                .catch(reject);
        });
    };

    const handleSendCertificate = async () => {
        if (!email.trim()) {
            setEmailStatus("❌ Please enter a valid email address.");
            return;
        }
    
        try {
            setLoading(true);
            setEmailStatus("Generating and Sending Certificate...");
            const pdfBase64 = await generateCertificatePDF();
            
            const certificateData = {
                name: userName,
                email: email,
                score: `${correctAnswers}/${totalQuestions}`,
                date: new Date().toLocaleDateString(),
            };
    
            // Backend API call here
            console.log("📤 Sending...", certificateData);
            
            const response = await fetch("http://localhost:5000/api/send-certificate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userName,
                email,
                score: `${correctAnswers}/${totalQuestions}`,
                date: new Date().toLocaleDateString(),
                certificatePdf: pdfBase64,
            }),
        });
    
            const result = await response.json();
    
            if (response.ok) {
                setEmailStatus("✅ Certificate sent successfully!");
            } else {
                setEmailStatus(`❌ Failed to send: ${result.error}`);
            }
        } catch (error) {
            setEmailStatus("❌ Error:", error);
            setEmailStatus("❌ Error sending certificate. Try again later.", error);
        } finally {
            setLoading(false);
        }
    };
    

    const restartQuiz = () => {
        setShowConfirmModal(true);
    };

    const confirmRestart = () => {
        setCurrentQuestionIndex(0);
        setCorrectAnswers(0);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setShowFeedbackModal(false);
        setQuizCompleted(false);
        setQuizPassed(false);
        setQuizStarted(false);
        setShowConfirmModal(false);
        setIntroCompleted(false);
        setIntroIndex(0);
        setEmail("");
        setEmailStatus("");
    };

    const cancelRestart = () => {
        setShowConfirmModal(false);
    };

    return (
        <div className="quiz__container">
            {!quizStarted ? (
                !introCompleted ? (
                    <div className="intro__container">
                        <h2>Training Lesson {introIndex + 1}</h2>
                        <h3>{IntroTrainingData[introIndex].title}</h3>
                        {IntroTrainingData[introIndex].img && (
                            <div className="training-link__container">
                                <img className="training__img" src={IntroTrainingData[introIndex].img} alt="Training tip" />
                                <a className="" href={IntroTrainingData[introIndex].reference} alt="reference">{IntroTrainingData[introIndex].a_text}</a>
                            </div>
                        )}
                        <p>{IntroTrainingData[introIndex].prompt}</p>
                        <div className="btn__container">
                            {introIndex < IntroTrainingData.length - 1 ? (
                                <button
                                    onClick={() => setIntroIndex(introIndex + 1)}
                                    className="btn__reg"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIntroCompleted(true)}
                                    className="btn__reg"
                                >
                                    Begin CPAT+
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="intro__container">
                        <h2>Welcome to the Training Module</h2>
                        <p>Note: A minimum of 70% is required to pass. You can retake the exam anytime.</p>
                        <p>Enter your name to get your Certified Phishing Awareness Training Plus (CPAT+):</p>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Your Name"
                        />
                        <button
                            onClick={() => {
                                if (userName.trim()) {
                                    setQuizStarted(true);
                                } else {
                                    alert("Please enter your name to continue.");
                                }
                            }}
                            className="btn__reg"
                        >
                            Start
                        </button>
                    </div>
                )
            ) : !quizCompleted ? (
                <>
                    <div className="intro__container">
                        <h2>Knowledge Check</h2>
                        <h3>Level: {currentQuestion.difficulty}</h3>
                        <p>
                            Accuracy:{" "}
                            {currentQuestionIndex > 0
                                ? ((correctAnswers / currentQuestionIndex) * 100).toFixed(2)
                                : 0}
                            %
                        </p>
                        <p>
                            Correct Answers: {correctAnswers} of {currentQuestionIndex}
                        </p>
                        <p className="quiz__question">Question {currentQuestionIndex + 1}: {currentQuestion.question}</p>
                        {currentQuestion.img && (
                            <img className="training__img" src={currentQuestion.img} alt="Training question" />
                        )}

                        <div className="btn__container">
                            <button
                                className="true-btn"
                                onClick={() => handleAnswer(true)}
                                disabled={showFeedback}
                            >
                                True
                            </button>
                            <button
                                className="false-btn"
                                onClick={() => handleAnswer(false)}
                                disabled={showFeedback}
                            >
                                False
                            </button>
                        </div>
                    </div>

                    {showFeedbackModal && (
                        <div className="modal__overlay">
                            <div className="modal__box">
                                <p>
                                    {selectedAnswer === currentQuestion.answer ? "✅ Correct!" : "❌ Incorrect!"}
                                </p>
                                <p>{currentQuestion.feedback}</p>
                                {currentQuestion.feedbackImg && (
                                    <img className="training__img" src={currentQuestion.feedbackImg} alt="Feedback visual" />
                                )}
                                <div className="modal__actions">
                                    <button onClick={handleNextQuestion} className="btn__reg">
                                        Next
                                    </button>
                                    <button onClick={restartQuiz} className="false-btn">
                                        Restart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="certificate__container end_of_page_margins">
                    <h2>
                        {quizPassed
                            ? `Congratulations, ${userName}!`
                            : `Sorry, ${userName}.`}
                    </h2>
                    <p>You have completed the quiz.</p>
                    <p>
                        Final Score:{" "}
                        {((correctAnswers / totalQuestions) * 100).toFixed(2)}%
                    </p>

                    {quizPassed ? (
                        <>
                            <p>✅ You passed!</p>
                            <CertificateTemplate
                                userName={userName}
                                correctAnswers={correctAnswers}
                                totalQuestions={totalQuestions}
                            />
                            <div className="email__form">
                                <p className="email__p">Send to email?</p>
                                <input
                                    className="email__input"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button onClick={handleSendCertificate} className="btn__reg" disabled={loading}>
                                    {loading ? <div className="spinner"></div> : "Email Certificate"}
                                </button>
                                {emailStatus && <p>{emailStatus}</p>}
                            </div>
                        </>
                    ) : (
                        <>
                            <p>❌ You need at least {passingScore}% to pass.</p>
                            <button onClick={restartQuiz} className="false-btn">
                                Retry Quiz
                            </button>
                        </>
                    )}
                </div>
            )}

            {/* Hidden Certificate for PDF generation*/}
            <div id="certificate" className="cpat-certificate" style={{ display: "none" }}>
                <CertificateTemplate
                    ref={certificateRef}
                    userName={userName}
                    correctAnswers={correctAnswers}
                    totalQuestions={totalQuestions}
                    date={new Date().toLocaleDateString()}
                />
            </div>


            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="modal__overlay">
                    <div className="modal__box">
                        <p>Are you sure you want to restart the quiz?</p>
                        <div className="modal__actions">
                            <button onClick={confirmRestart} className="btn__reg">
                                Confirm
                            </button>
                            <button onClick={cancelRestart} className="false-btn">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
