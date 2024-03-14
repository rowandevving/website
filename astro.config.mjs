import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({

	integrations: [
		preact(),
		UnoCSS({
			injectReset: true
		}),
	],
});
