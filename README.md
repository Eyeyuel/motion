# 🧩 Motion Components

<p align="center">
  <strong>A curated collection of reusable, beautifully animated React components built with Motion, Next.js, and TypeScript.</strong>
</p>

<p align="center">
  <a href="https://motion-components-demo.vercel.app/">
    <img src="https://img.shields.io/badge/Live-Demo-000?style=for-the-badge&logo=vercel" alt="Live Demo"/>
  </a>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Motion-8B5CF6?style=for-the-badge&logo=framer&logoColor=white" alt="Motion"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

<p align="center">
  <a href="https://motion-components-demo.vercel.app/">🌐 Live Demo</a>
  •
  <a href="https://github.com/Eyeyuel">GitHub</a>
  •
  <a href="https://www.linkedin.com/in/eyuel-teklu">LinkedIn</a>
</p>

---

## 📖 About The Project

This repository is my personal toolkit of **production-ready animated components** that I reuse across various frontend projects. Every component is:

* **Self-contained** – a single file with minimal dependencies
* **Fully typed** – TypeScript provides autocompletion and safety
* **Well-documented** – inline comments explain props and animation behavior
* **Ready to use** – just copy the file into your project

Instead of rewriting the same scroll reveals, hover effects, and page transitions for each new project, I maintain a central collection of polished, battle-tested patterns.

---

## ✨ What's Included

* 🎴 **Animated Card** – spring hover lift + scroll entrance (`whileInView` + `whileHover`)
* 📜 **Staggered List** – items fade/slide in one by one with configurable delays
* 👁️ **Fade In View** – wraps any content and fades it in when scrolled into view
* 🪨 **Jiggle On Return** – heavy‑object settling effect when user scrolls back to top
* 🎬 **Page Transition** – smooth enter/exit animations powered by `AnimatePresence`
* ➖ **Draw Reveal** – horizontal line that grows from 0 to full width on scroll
* 🔔 **Wobble Icon** – quick rotation shake when an icon enters the viewport
* 🏷️ **Floating Badge** – badge slides up and stays visible, great for status indicators

*More components are added regularly – check the `components/` directory for the latest.*

---

## 🛠️ Tech Stack

| Category      | Technologies            |
| ------------- | ----------------------- |
| Framework     | Next.js 14 (App Router) |
| Language      | TypeScript              |
| Styling       | Tailwind CSS            |
| UI Base       | shadcn/ui               |
| Animations    | Motion (Framer Motion)  |
| Deployment    | Vercel                  |

---

## 📸 Preview

![Component Showcase](public/screenshot.png)

---

## 🚀 Getting Started

### Clone the Repository


git clone https://github.com/eyeyuel/motion-components.git
cd motion-components
Install Dependencies
bash
pnpm install
Start Development Server
bash
pnpm dev
Open:

text
http://localhost:3000
📦 Usage
Browse the demo page to see all components in action.

Open the components/ folder.

Copy the desired component file into your own project.

Ensure your project has motion and tailwindcss installed.

Customize the props and styling as needed – every component accepts a className prop.

⚡ The components are not locked to Next.js – they work in any React application that supports motion and Tailwind.

📂 Project Structure
text
├── app
│   ├── page.tsx              # Showcase page
│   └── layout.tsx
├── components
│   ├── animated-card.tsx
│   ├── staggered-list.tsx
│   ├── fade-in-view.tsx
│   ├── jiggle-on-return.tsx
│   ├── page-transition.tsx
│   └── ...
├── public
├── styles
└── package.json
📫 Contact
I'm always open to collaborations, freelance work, or discussions about motion design and front‑end engineering.

Email: eyueltklu27@gmail.com

Telegram: @Eyuel_Teklu

GitHub: https://github.com/eyeyuel

LinkedIn: YOUR_LINKEDIN_URL

📄 License
This project is licensed under the MIT License.

<p align="center"> Built with ❤️ and a lot of spring physics by <strong>Eyuel Teklu</strong> </p>
