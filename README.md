# 🐟 KillPhish – Phishing Awareness & Simulation Tool

**KillPhish** is an interactive phishing awareness and simulation app that generates realistic phishing email templates using AI. It includes a gamified quiz feature and certificate generation to help users learn and recognize phishing attempts in a fun and effective way.

## 🚀 Features

- 💬 **AI-Powered Email Generator**: Generate realistic phishing email templates based on user-defined prompts.
- 🧠 **Phishing Awareness Quiz**: Test users with a phishing recognition quiz.
- 📄 **Certificate Generator**: Generate and send custom PDF certificates via email after quiz completion.
- 🖨️ **Print-Ready PDFs**: Option to print or download certificates.
- 📨 **Email Sending**: Backend integration to send certificates via email.

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/quddusyo/killphish-app.git
cd killphish-app
```

### 2. Install Dependencies

```bash
npm install react-router-dom @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @emailjs/browser react-toastify react-spinners react-to-print html2pdf.js express nodemailer dotenv cors
```

---

## ⚙️ Setup

### Environment Variables

Create a `.env` file in the root of your project and include the following:

```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
EMAILJS_USER_ID=your_emailjs_user_id (if used)
```

> Make sure you do **not** commit `.env` to version control. Add it to `.gitignore`.

---

## 🧪 Running the App

### Frontend (React)

```bash
npm start
```

### Backend (Express)

In a separate terminal:

```bash
node backend/server.js
```

---

## 📬 Contact

For questions or support, feel free to [open an issue](https://github.com/quddusyo/killphish-app/issues).


------------------------------------------------------------------------------------
## 🚀 Deploying KillPhish to Firebase and GitHub

### ✅ Push Code to GitHub

From your project root:

```bash
git init  # only if not already a git repo
git remote add origin https://github.com/quddusyo/killphish-app.git

git add .
git commit -m "Initial commit or update"
git push -u origin main  # or replace 'main' with your branch name
```

---

### 🌐 Deploy React App to Firebase Hosting

```bash
npm run build           # Builds your production-ready React app
firebase deploy --only hosting  # Deploys to Firebase Hosting
```

---

### 🧠 Optional: Deploy Both Hosting and Functions

```bash
firebase deploy --only hosting,functions
```

Repeat `npm run build` + `firebase deploy` whenever you make changes.

---

Happy shipping! 🔐✨
