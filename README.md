# Barbie Dream House

A React dress-up game where you can explore four rooms, assemble outfits, and customize Barbie's hair, skin, eyes, and facial features. The closet includes dresses, tops, bottoms, shoes, and accessories.

![Barbie Dream House gameplay](screenshot.png)

## Setup

Requires Node.js and npm. From the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally <http://localhost:5173/>), then select **Let's Play!**.

## Play

Switch rooms using the tabs on the left. Select closet categories and items on the right to dress Barbie; select an equipped item again to remove it. Use the controls below the character to change hair color and style, skin tone, eye color, bangs, eyes, nose, and mouth. The header buttons toggle sound and clear the outfit.

## Build and checks

```sh
npm run build    # Production files in dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint checks
```

The production build passes. At the time of this README update, `npm run lint` reports five existing errors in `src/App.jsx`, `src/components/Barbie.jsx`, `src/components/Sparkles.jsx`, and `src/hooks/useSound.js`.

## Project structure

`src/App.jsx` manages game state and room navigation; `src/components/` contains the welcome screen, character, wardrobe, and effects; `src/data/` holds room and clothing data; and `src/hooks/` contains sound behavior. Vite serves the app from `index.html`.
