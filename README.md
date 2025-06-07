# Vite + Solid + Vercel

To start a Vite + Solid app and run it locally with Vercel, follow these steps:

## Steps to create a SolidJS + TypeScript + TSX project

1. **Initialize a new SolidJS project with Vite and TypeScript:**

```bash
npm create vite@latest solid-leaderboard -- --template solid-ts
cd solid-leaderboard
npm install
```

2. **Replace the default `src/App.tsx` with your minimal "hello from solidjs" component:**

```tsx
import type { Component } from "solid-js";

const App: Component = () => {
  return hello from solidjs;
};

export default App;
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser at the URL shown (usually http://localhost:5173).**

---

- The `solid-ts` Vite template sets up TypeScript, TSX, and SolidJS with fast refresh and optimized builds.
- You write your components in `.tsx` files using JSX syntax.
- Vite handles compiling TSX and TypeScript automatically.
- This setup is the standard way to develop SolidJS apps with TypeScript.



## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)
