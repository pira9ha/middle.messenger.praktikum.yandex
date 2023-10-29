import { resolve } from 'path';
import {Plugin, defineConfig } from 'vite';
import handlebars from "vite-plugin-handlebars";

export default defineConfig( {
	root: resolve(__dirname, 'src'),
	resolve: {
		alias: [
			{ find: '@/pages', replacement: resolve(__dirname, 'src/pages') },
			{ find: '@/shared', replacement: resolve(__dirname, 'src/shared') },
			{ find: '@/widgets', replacement: resolve(__dirname, 'src/widgets') },
			{ find: '@/features', replacement: resolve(__dirname, 'src/features') },
			{ find: '@/assets', replacement: resolve(__dirname, 'src/assets') },
		],
		extensions: ['.js', '.ts']
	},
	build: {
		outDir: resolve(__dirname, 'dist')
	},
	plugins: [handlebars() as unknown as Plugin],
	css: {
		preprocessorOptions: {
			scss: { additionalData: `@import "src/shared/styles/media";@import "src/shared/styles/global";` },
		},
		modules: {
			generateScopedName: "[name]__[local]__[hash:base64:4]"
		},
	},
});
