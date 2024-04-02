import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import UnoCSS from 'unocss/astro';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://rowan.pages.dev',

  integrations: [preact(), UnoCSS({
    injectReset: true
  }), robotsTxt()]
});