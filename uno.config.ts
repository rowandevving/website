import { defineConfig } from "unocss";
import { presetUno } from "unocss";
import { presetWebFonts } from "unocss";
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "Plus Jakarta Sans",
        mono: "JetBrains Mono",
      },
    }),
    presetIcons(),
  ],
  theme: {
    colors: {
      base: "#3b2433",
      primary: "#68415a",
      secondary: "#895677",
      accent: "#f5c0e3",
      dull: "#ce9abc",
    },
  },
});