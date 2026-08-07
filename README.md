<div align="center">
  <h1 align="center">Phoenix (CP Unofficial) 🦅</h1>
  <p align="center">
    <strong>An open, feature-rich community platform for competitive programming enthusiasts.</strong>
  </p>
  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
    <a href="https://firebase.google.com/"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" /></a>
    <a href="https://gemini.google.com/"><img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" /></a>
  </p>
</div>

<hr />

## 📖 About The Project

Welcome to **Phoenix (CP Unofficial)**! We are a group of students from NIT Rourkela who are passionate about programming. We built this platform to create a centralized space for like-minded individuals to connect, practice algorithms, share resources, and grow together in their software engineering journeys.

## ✨ Key Features

### 💻 Online IDE with AI Assistant
Write, compile, and execute code in **Python, Java, C++, and JavaScript** directly in your browser! 
- **AI-Powered Execution:** Uses Google Gemini to perfectly simulate code execution, meaning it's incredibly fast, takes custom inputs (`stdin`), and requires zero container setup!
- **AI Code Assistant:** A built-in chat panel allows you to ask questions about your code, find bugs, or get explanations instantly.
- **Bring Your Own Key:** Users can optionally input their own free Gemini API key right in the IDE to run their code privately.

<div align="center">
  <img src="/ide-demo.png" alt="Phoenix IDE & AI Analysis" width="100%" />
</div>

### 💬 Global Chatroom
A real-time hub to exchange ideas, post messages, and respond to other members of the community instantly.

### 📅 Events & Contests
Track upcoming programming contests (Codeforces, LeetCode, CodeChef) and internal community events.

### 📚 Curated Resources
A centralized collection of the best competitive programming resources, tutorials, and tools for students.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Sass](https://sass-lang.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Backend/Auth:** [Firebase](https://firebase.google.com/)
- **AI & Execution Engine:** [Google Gemini API](https://ai.google.dev/) & [LangGraph](https://langchain-ai.github.io/langgraphjs/)
- **Code Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### 1. Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn
- A [Firebase Project](https://console.firebase.google.com/)
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/Anwesha0425/Phoenix.git
cd Phoenix
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your credentials. This connects the app to your Firebase backend and enables the AI engine.

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APPID=your_app_id

# AI & IDE Configuration
GOOGLE_API_KEY=your_gemini_api_key_here
```

### 4. Run the Application
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the app!

---

## 📜 License
All rights reserved.