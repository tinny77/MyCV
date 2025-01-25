import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslintPlugin({
			cache: false,
			include: ['./src/**/*.js', './src/**/*.jsx'],
			exclude: [],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
