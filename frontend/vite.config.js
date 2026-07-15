import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  test: {
    globals: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
})

