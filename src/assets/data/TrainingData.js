import Sample1 from "../images/pishingSamples/SampleHard1.jpg"
import Sample2 from "../images/pishingSamples/SampleHard2.jpg"
import Sample2ans from "../images/pishingSamples/SampleHard2ans.jpg"
import Sample3 from "../images/pishingSamples/SampleHard3.jpg"
import Sample4 from "../images/pishingSamples/SampleHard4.jpg"

export const TrainingData = [
    {
        id: 0,
        question: "Phishing emails often create a sense of urgency to trick the recipient.",
        answer: true,
        difficulty: "easy",
        feedback: "Phishing emails often create a sense of urgency to trick the recipient. They may claim that your account has been compromised or that you need to act quickly to claim a prize.",
    },
    {
        id: 1,
        question: "The Anti-Phishing Working Group accepts reports of phishing text messages.",
        answer: false,
        difficulty: "easy",
        feedback: "They handle phishing emails, not texts.",
    },
    {
        id: 2,
        question: "Hovering over a link in an email can help reveal its true destination.",
        answer: true,
        difficulty: "easy",
        feedback: "Hovering over a link in an email can help reveal its true destination. If the link does not match the text of the email, it may be a phishing attempt.",
    },
    {
        id: 3,
        question: "You should report phishing emails by replying directly to the sender.",
        answer: false,
        difficulty: "easy",
        feedback: "You should forward phishing emails to reportphishing@apwg.org, not reply to the sender.",
    },
    {
        id: 4,
        question: "Phishing can also occur through phone calls and text messages.",
        answer: true,
        difficulty: "easy",
        feedback: "Phishing can also occur through phone calls and text messages. Be cautious of any unsolicited communication asking for sensitive information.",
    },
    {
        id: 5,
        question: "You receive an email offering a job at Google, but the sender's email is jhon.wick@g00gl3.com. Is it safe to open?",
        answer: false,
        difficulty: "easy",
        feedback: "Emails with poorly constructed sender addresses, such as jhon.wick@g00gl3.com instead of jhon.wick@g00gl3.com, are often phishing attempts. Be cautious of emails with suspicious sender addresses.",
    },
    {
        id: 6,
        question: "Checking for spelling and grammatical errors can help identify phishing emails.",
        answer: true,
        difficulty: "easy",
        feedback: "Checking for spelling and grammatical errors can help identify phishing emails. Many phishing emails contain errors that a legitimate organization would not make.",
    },
    {
        id: 7,
        question: "A phishing attack can use a compromised account from your organization to send malicious emails.",
        answer: true,
        difficulty: "intermediate",
        feedback: "Yes, attackers can take over legitimate accounts and send phishing emails to gain further access or spread malware within an organization.",
    },
    {
        id: 8,
        question: "Deleting a phishing message is enough—you don’t need to report it.",
        answer: false,
        difficulty: "intermediate",
        feedback: "Reporting helps prevent future scams and supports investigation efforts.",
    },
    {
        id: 9,
        question: "The Anti-Phishing Working Group is part of the Federal Trade Commission (FTC).",
        answer: false,
        difficulty: "intermediate",
        feedback: "They are separate organizations.",
    },
    {
        id: 10,
        question: "Phishers can use QR codes instead of links to trick users into visiting malicious websites.",
        answer: true,
        difficulty: "intermediate",
        feedback: "Yes, attackers use QR codes in phishing emails to bypass security filters and trick users into scanning them with their phones.",
    },
    {
        id: 11,
        question: "Business Email Compromise (BEC) attacks typically involve mass phishing emails sent to thousands of users.",
        answer: false,
        difficulty: "intermediate",
        feedback: "BEC attacks are usually highly targeted, focusing on specific individuals, such as executives or finance employees, to manipulate them into transferring funds or sharing sensitive data.",
    },
    {
        id: 12,
        question: "An email that appears to be from your boss, asking you to buy gift cards urgently, could be a phishing attempt.",
        answer: true,
        difficulty: "intermediate",
        feedback: "This is a common phishing scam known as CEO fraud or gift card scam. Always verify such requests through a separate communication channel.",
    },
    {
        id: 13,
        question: "A phishing attack that directs users to a fake login page is known as credential harvesting.",
        answer: true,
        difficulty: "intermediate",
        feedback: "Credential harvesting phishing attacks trick users into entering their login credentials on fake websites, allowing attackers to steal their passwords.",
    },
    {
        id: 14,
        question: "Attackers can use phishing emails to deploy malware, such as ransomware, on a victim’s system.",
        answer: true,
        difficulty: "intermediate",
        feedback: "Yes, phishing emails often contain malicious attachments or links that, when opened, download and execute malware such as ransomware.",
    },
    {
        id: 15,
        question: "To avoid phishing attacks, employees should report suspicious emails directly to their IT team instead of deleting them immediately.",
        answer: true,
        difficulty: "intermediate",
        feedback: "Reporting suspicious emails helps security teams analyze and prevent further attacks. Most organizations have a process for reporting phishing attempts.",
    },
    {
        id: 16,
        question: "Attackers can use a technique called 'homograph attacks' to register fake domains using Unicode characters that look identical to real websites.",
        answer: true,
        difficulty: "hard",
        feedback: "Homograph attacks use Unicode characters to create deceptive URLs (e.g., ‘gооgle.com’ vs. ‘google.com’). Always verify URLs carefully.",
    },
    {
        id: 17,
        question: "All phishing attacks are carried out via email.",
        answer: false,
        difficulty: "hard",
        feedback: "Phishing can also occur through phone calls (vishing), SMS (smishing), QR codes (quishing), and fake websites.",
    },
    {
        id: 18,
        question: "Business Email Compromise (BEC) attacks typically use malware to steal credentials.",
        answer: false,
        difficulty: "hard",
        feedback: "BEC attacks usually rely on social engineering rather than malware. Attackers impersonate executives to trick employees into transferring money or sensitive data.",
    },
    {
        id: 19,
        question: "Multi-Factor Authentication (MFA) completely eliminates the risk of phishing attacks.",
        answer: false,
        difficulty: "hard",
        feedback: "MFA reduces risk but does not eliminate it. Attackers can use MFA phishing kits, SIM swapping, or social engineering to bypass MFA.",
    },
    {
        id: 20,
        question: "Emails digitally signed with DKIM (DomainKeys Identified Mail) are always safe and cannot be spoofed.",
        answer: false,
        difficulty: "hard",
        feedback: "DKIM helps verify sender authenticity, but attackers can still compromise accounts or use lookalike domains to bypass it.",
    },
    {
        id: 21,
        question: "Hovering over a link in an email is always enough to detect phishing attempts.",
        answer: false,
        difficulty: "hard",
        feedback: "Some phishing URLs use redirect tricks or look very similar to real ones. Always verify URLs manually if unsure.",
    },
    {
        id: 22,
        question: "If you accidentally click on a phishing link, the best first step is to disconnect from the network immediately.",
        answer: true,
        difficulty: "hard",
        feedback: "Disconnecting prevents potential malware from spreading or sending stolen credentials. Then, report the incident to IT/security.",
    },
    {
        id: 23,
        question: "If an email appears to come from your company's IT department, you can trust the instructions given.",
        answer: false,
        difficulty: "hard",
        feedback: "Always verify with IT through official channels. Attackers often spoof internal emails to trick employees into revealing sensitive data.",
    },
    {
        id: 24,
        question: "Cybercriminals can use AI-generated voices to impersonate real people in phishing scams.",
        answer: true,
        difficulty: "hard",
        feedback: "Deepfake audio and video phishing are emerging threats. Always confirm sensitive requests through a secondary channel.",
    },
    {
        id: 25,
        question: "Scanning a QR code in an email or flyer is always safe.",
        answer: false,
        difficulty: "hard",
        feedback: "QR phishing (quishing) can redirect to malicious sites or download malware. Always verify the source before scanning.",
    },
    {
        id: 26,
        question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
        answer: true,
        img: Sample1,
        difficulty: "hard",
        feedback: "Here are signs that this email is a scam, even though it looks like it comes from a company you know — and even uses the company’s logo in the header:\nThe email has a generic greeting.\nThe email says your account is on hold because of a billing problem.\nThe email invites you to click on a link to update your payment details."
    },
    {
        id: 27,
        question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
        answer: true,
        img: Sample2,
        feedbackImg: Sample2ans,
        difficulty: "hard",
        feedback: "View some indicators that the email is a scam:\nIn the image below."
    },
    {
        id: 28,
        question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
        answer: true,
        img: Sample3,
        difficulty: "hard",
        feedback: "The email sender address seems like it has originated outside the organization. Great way to check for phishing emails."
    },
    {
        id: 29,
        question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
        answer: false,
        img: Sample4,
        difficulty: "hard",
        feedback: "The email sender address seems like it is originated within the organization."
    },
];

// For Demo and CapCon Final Purposes
// export const TrainingData = [
//     {
//       id: 0,
//       question: "Phishing emails often create a sense of urgency to trick the recipient.",
//       answer: true,
//       difficulty: "easy",
//       feedback: "Phishing emails often create a sense of urgency to trick the recipient. They may claim that your account has been compromised or that you need to act quickly to claim a prize.",
//     },
//     {
//       id: 1,
//       question: "A phishing attack can use a compromised account from your organization to send malicious emails.",
//       answer: true,
//       difficulty: "intermediate",
//       feedback: "Yes, attackers can take over legitimate accounts and send phishing emails to gain further access or spread malware within an organization.",
//     },
//     {
//       id: 2,
//       question: "Deleting a phishing message is enough—you don’t need to report it.",
//       answer: false,
//       difficulty: "intermediate",
//       feedback: "Reporting helps prevent future scams and supports investigation efforts.",
//     },
//     {
//       id: 3,
//       question: "Phishers can use QR codes instead of links to trick users into visiting malicious websites.",
//       answer: true,
//       difficulty: "intermediate",
//       feedback: "Yes, attackers use QR codes in phishing emails to bypass security filters and trick users into scanning them with their phones.",
//     },
//     {
//       id: 4,
//       question: "An email that appears to be from your boss, asking you to buy gift cards urgently, could be a phishing attempt.",
//       answer: true,
//       difficulty: "intermediate",
//       feedback: "This is a common phishing scam known as CEO fraud or gift card scam. Always verify such requests through a separate communication channel.",
//     },
//     {
//       id: 5,
//       question: "Attackers can use phishing emails to deploy malware, such as ransomware, on a victim’s system.",
//       answer: true,
//       difficulty: "intermediate",
//       feedback: "Yes, phishing emails often contain malicious attachments or links that, when opened, download and execute malware such as ransomware.",
//     },
//     {
//       id: 6,
//       question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
//       answer: true,
//       img: Sample1,
//       difficulty: "hard",
//       feedback: "Here are signs that this email is a scam, even though it looks like it comes from a company you know — and even uses the company’s logo in the header:\nThe email has a generic greeting.\nThe email says your account is on hold because of a billing problem.\nThe email invites you to click on a link to update your payment details."
//     },
//     {
//       id: 7,
//       question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
//       answer: true,
//       img: Sample2,
//       feedbackImg: Sample2ans,
//       difficulty: "hard",
//       feedback: "View some indicators that the email is a scam:\nIn the image below."
//     },
//     {
//         id: 8,
//         question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
//         answer: true,
//         img: Sample3,
//         difficulty: "hard",
//         feedback: "The email sender address seems like it has originated outside the organization. Great way to check for phishing emails."
//     },
//     {
//       id: 9,
//       question: "Imagine you saw this in your inbox. Click True if you think its malicious, False otherwise.",
//       answer: false,
//       img: Sample4,
//       difficulty: "hard",
//       feedback: "The email sender address seems like it is originated within the organization."
//     }
//   ];

