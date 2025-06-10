// vite.config.ts
import { defineConfig } from "@solidjs/start/vite";
import vercel from "solid-start-vercel"; // Import the Vercel adapter

export default defineConfig({
  plugins: [
    // Use the Vercel adapter for deployment
    vercel({
      // You can add Vercel specific options here if needed.
    }),
  ],
});