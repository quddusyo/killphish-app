const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "2mb" })); // allow small base64 PDFs

// Email transporter (using Gmail as example — be sure to use App Passwords if 2FA is on)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint to handle certificate sending
app.post("/api/send-certificate", async (req, res) => {
  const { name, email, score, date, certificatePdf } = req.body;

  if (!name || !email || !score || !date || !certificatePdf) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const mailOptions = {
    from: '"CPAT+ Certificate" <your_email@gmail.com>',
    to: email,
    subject: "🎓 Your CPAT+ Certificate",
    text: `Hi ${name},\n\nCongratulations on completing the CPAT+ training!\n\nScore: ${score}\nDate: ${date}\n\nYour certificate is attached as a PDF.\n\n- KillPhish Team`,
    attachments: [
      {
        filename: "CPAT_Plus_Certificate.pdf",
        content: Buffer.from(certificatePdf, "base64"),
        contentType: "application/pdf",
      },
    ],    
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📨 Certificate sent to ${email}`);
    res.status(200).json({ message: "Certificate sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending certificate:", error);
    res.status(500).json({ error: "Error sending certificate" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

