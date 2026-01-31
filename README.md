# For My Forever — Shivangi 💖

A romantic, cute, and emotional webpage built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🌹 Floating roses and hearts animations
- 🧸 Cute teddy bear illustrations
- 💕 Smooth Framer Motion transitions
- 💖 Interactive proposal section with confetti
- 📱 Fully responsive mobile-first design
- 🎨 Soft pink, blush, and cream color palette
- ✨ Sparkle effects and heartbeat animations

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** - Custom romantic theme
- **Framer Motion** - Smooth animations
- **React Confetti** - Celebration effects
- **TypeScript** - Type safety
- **Google Fonts** - Dancing Script & Pacifico

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Project Structure

```
cutie/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page combining all sections
│   └── globals.css      # Global styles
├── components/
│   ├── HeroSection.tsx           # Landing hero with teddy bear
│   ├── LoveMessageSection.tsx    # Message card with hearts
│   ├── CuteCharactersSection.tsx # Cartoon couple
│   ├── PromiseSection.tsx        # Envelope with promise
│   ├── ProposalSection.tsx       # Final interactive proposal
│   ├── FloatingRose.tsx          # Animated rose component
│   ├── FloatingHeart.tsx         # Animated heart component
│   └── Sparkle.tsx               # Sparkle effect component
├── tailwind.config.ts   # Custom theme configuration
├── package.json
└── next.config.js
```

## Customization

### Colors

Edit [tailwind.config.ts](tailwind.config.ts) to customize the color palette:

```typescript
colors: {
  rose: { ... },
  blush: { ... },
  cream: { ... }
}
```

### Animations

Adjust animation speeds in [tailwind.config.ts](tailwind.config.ts) under `keyframes` and `animation`.

### Fonts

Change fonts in [app/layout.tsx](app/layout.tsx) by importing different Google Fonts.

## License

Created with love ❤️

---

**Made for Shivangi** 💖
