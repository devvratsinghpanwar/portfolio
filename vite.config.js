import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagePresets({
      // Example of an image width preset
      responsive: widthPreset({
        widths: [320, 640, 1280],
        formats: {
          avif: { quality: 50 },
          webp: { quality: 50 },
        },
      }),
    }),
  ],
})
