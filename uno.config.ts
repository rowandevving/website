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
        sans: [
          {
            name: "Figtree",
            weights: ["400", "700"],
          }
        ],
        serif: "Young Serif",
      },
    }),
    presetIcons(),
  ],
  theme: {
    colors: {
      dark_base: "#24273a",
      dark_0: "#363a4f",
      dark_1: "#494d64",
      dark_2: "#5b6078",
      dark_text: "#cad3f5",
      dark_subtext: "#a5adcb",
      dark_pink: "#f5bde6",
      dark_pink_overlay: "rgb(245, 189, 230, 0.2)",
      light_base: "#eff1f5",
      light_0: "#ccd0da",
      light_1: "#bcc0cc",
      light_2: "#acb0be",
      light_text: "#4c4f69",
      light_subtext: "#6c6f85",
      light_pink: "#ea76cb",
      light_pink_overlay: "rgb(234, 118, 203, 0.2)",
    },
  },
});