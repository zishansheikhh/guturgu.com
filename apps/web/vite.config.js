import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	preview: {
		port: 3000,
		allowedHosts: ['guturgu.com', 'www.guturgu.com'],
	},
	server: {
		port: 3000,
		allowedHosts: ['guturgu.com', 'www.guturgu.com'],
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});