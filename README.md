# agency.ai — Responsive Website

A pixel-perfect clone of the agency.ai website from the GreatStack YouTube tutorial, built with **React + Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
agency-ai/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx       # Sticky navbar with dark mode toggle + mobile menu
        ├── Hero.jsx         # Hero section with heading + hero image
        ├── Brands.jsx       # Auto-scrolling brand logos marquee
        ├── Services.jsx     # 6-service cards grid
        ├── Work.jsx         # 3 portfolio work cards
        ├── Team.jsx         # 8 team member cards
        ├── Contact.jsx      # Contact form (name, email, message)
        ├── Footer.jsx       # Newsletter + social links
        └── CursorOrb.jsx    # Smooth custom cursor follower
```

## ✨ Features

- **Fully Responsive** — mobile, tablet, desktop
- **Dark Mode** — toggle with moon icon in navbar
- **Smooth Cursor** — floating orb that follows your cursor
- **Brand Marquee** — auto-scrolling company logos
- **Scroll Animations** — fade-up on load
- **Hover Effects** — cards lift on hover
- **Contact Form** — with validation and success state

## 🛠 Tech Stack

- React 18
- Tailwind CSS 3
- Vite 5
- Outfit font (Google Fonts)
