import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://rowan.pages.dev',

  integrations: [UnoCSS({
    injectReset: true
  }), robotsTxt()]
});