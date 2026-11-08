# Barbie Dream House

Step inside Barbie's Dream House and create a look that's all your own. Explore the rooms, try on outfits, and customize Barbie from head to toe — all rendered with hand-drawn SVG, no image assets or backend required.

![Barbie Dream House gameplay](screenshot.png)

## Features

- **Four explorable rooms** — Bedroom, Living Room, Kitchen, and Garden, each with its own gradient backdrop and decorations.
- **Dress-up wardrobe** — 31 clothing items across dresses, tops, bottoms, shoes, accessories, and hair pieces. Dresses and tops/bottoms are mutually exclusive, and every item toggles on/off with a click.
- **Special items** — Nine star-marked pieces (Princess Gown, Mermaid Tail, Fairy Wings, Queen Crown, and more) with their own chime sound.
- **Character customization** — Hair color and style, bangs, skin tone, eye color and style, nose, and mouth.
- **Procedural sound effects** — Sparkle, whoosh, chime, and click sounds synthesized at runtime with the Web Audio API (no audio files), with a mute toggle.
- **Pure SVG artwork** — Barbie, the outfits, and the room decorations are all inline React SVG components, so they scale crisply at any size.

## How to play

- Select **Let's Play!** to enter the Dream House.
- Use the room tabs on the left to visit the **Bedroom**, **Living Room**, **Kitchen**, and **Garden**.
- Browse the closet panel on the right by category — dresses 👗, tops 👚, bottoms 👖, shoes 👠, and accessories 👑. Select an item to wear it; select it again to take it off.
- Change Barbie's hair, skin, eyes, nose, and mouth with the controls below her.
- Use the 🔊 button (top-left) to mute sounds and the 🔄 button (top-right) to clear the outfit.

## Play locally

Requires Node.js and npm.

```sh
# Install dependencies
npm ci

# Start the dev server (opens at http://localhost:5173/)
npm run dev
```

### Other scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build a production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the codebase with ESLint |

## Tech stack

- [React 19](https://react.dev/) — UI, with hooks only (no state library)
- [Vite 7](https://vite.dev/) — dev server and bundler
- [ESLint 9](https://eslint.org/) — linting with the React Hooks and React Refresh plugins
- Plain CSS (`App.css` plus `src/styles/`) — no CSS framework

## Project structure

```
barbie/
├── index.html                  # Vite entry HTML
├── vite.config.js              # Vite + React plugin config
├── screenshot.png              # Gameplay screenshot
└── src/
    ├── main.jsx                # App bootstrap
    ├── App.jsx                 # Game state: room, outfit, appearance
    ├── App.css                 # Main stylesheet
    ├── components/
    │   ├── WelcomeScreen.jsx   # Landing screen with "Let's Play!"
    │   ├── Barbie.jsx          # SVG character (hair, face, body rendering)
    │   ├── Wardrobe.jsx        # Closet panel: category tabs + item grid
    │   ├── ClothingItem.jsx    # Single wardrobe item card
    │   ├── House.jsx           # Room + Barbie + room selector layout
    │   ├── Room.jsx            # Room background and decorations
    │   ├── RoomSelector.jsx    # Room tab bar
    │   └── Sparkles.jsx        # Sparkle burst effect on outfit changes
    ├── data/
    │   ├── clothes.jsx         # All clothing items as SVG definitions
    │   └── rooms.jsx           # Room definitions, backgrounds, decorations
    ├── hooks/
    │   └── useSound.js         # Web Audio API sound synthesis + mute state
    └── styles/
        ├── variables.css       # CSS custom properties (colors, fonts)
        └── animations.css      # Keyframe animations
```

> Note: `House.jsx`, `Room.jsx`, and `RoomSelector.jsx` are an earlier layout that `App.jsx` supersedes; the room tabs and stage in `App.jsx` are what's rendered.

## Adding content

- **New clothing item** — add an entry to the relevant array in `src/data/clothes.jsx` with an `id`, `name`, `category`, `color`, an SVG `<g>` drawn against the `0 0 300 500` character viewBox, and a `thumbnail` color. Set `isSpecial: true` for star items.
- **New room** — add an entry to `src/data/rooms.jsx` with an `id`, `name`, `icon`, a CSS `background`, and decorations; it appears in the room tabs automatically.
