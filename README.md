# ✨ Barbie Dream House

Step inside Barbie's Dream House and create a look that's all your own. Explore the rooms, try on outfits, and customize Barbie from head to toe — all in your browser.

![Barbie Dream House gameplay](screenshot.png)

## Features

- **🏡 Four rooms to explore** — Bedroom, Living Room, Kitchen, and Garden, each with its own decorations and color palette.
- **👗 A full wardrobe** — 31 items across dresses, tops, bottoms, shoes, accessories, and hair pieces, including a special sparkly Princess Gown.
- **💁 Character customization** — Mix and match hair color and style, bangs, skin tone, eye color and style, nose, and mouth for endless looks.
- **✨ Sparkle effects** — Every outfit change triggers a burst of animated sparkles.
- **🔊 Sound effects** — Playful chimes, whooshes, and sparkles generated with the Web Audio API (no audio files needed). Mute anytime with the 🔊 button.
- **⚡ Built with React + Vite** — Fast, lightweight, and pure SVG graphics.

## How to play

- Select **Let's Play!** to enter the Dream House.
- Visit the **Bedroom**, **Living Room**, **Kitchen**, and **Garden** using the room buttons on the left.
- Browse the wardrobe on the right for dresses, tops, bottoms, shoes, and accessories. Select an item to wear it, or select it again to take it off.
- Change Barbie's hair, skin, eyes, and expression with the controls below her. Use the top-right 🔄 button to clear the outfit.

## Play locally

Requires Node.js 18+ and npm.

```sh
npm ci
npm run dev
```

Then open the local URL shown in your terminal (usually <http://localhost:5173/>).

### Other commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with ESLint |

## Project structure

```
src/
├── App.jsx              # Game state: rooms, outfit, customization
├── components/          # Barbie, Wardrobe, Sparkles, screens…
├── data/
│   ├── clothes.jsx      # Clothing items as SVG artwork
│   └── rooms.jsx        # Rooms and their decorations
├── hooks/
│   └── useSound.js      # Web Audio sound effects
└── styles/              # CSS variables and animations
```

## Tech stack

- [React 19](https://react.dev)
- [Vite 7](https://vite.dev)
- Pure SVG graphics — no image assets
- Web Audio API for procedurally generated sounds
