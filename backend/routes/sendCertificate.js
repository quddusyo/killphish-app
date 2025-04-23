const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", async (req, res) => {
    const { name, email, score, date } = req.body;

    if (!name || !email || !score || !date) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Cybersecurity Training" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "🎓 Your Certificate of Completion",
            html: `
                <h2>Congratulations, ${name}!</h2>
                <p>You’ve successfully passed the cybersecurity phishing awareness quiz with a score of <strong>${score}</strong>.</p>
                <p><strong>Date:</strong> ${date}</p>
                <p>Attached is your digital certificate.</p>
                <br/>
                <p>Stay safe online!</p>
            `,
            // If you have a PDF/image certificate to attach:
            // attachments: [{ filename: 'certificate.pdf', path: '/path/to/cert.pdf' }]
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
        console.error("Error sending email:", error);
    }
});

module.exports = router;
