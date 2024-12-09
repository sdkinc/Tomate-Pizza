import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const isDevelopment = mode === 'development';

	return {
		plugins: [react()],
		server: {
			open: true,
			proxy: {
				'/api': {
					target: isDevelopment ? 'http://localhost:8080' : '/',
				},
			},
		},
		build: {
			outDir: 'dist',
			sourcemap: true,
		},
		base: '/Tomate-Pizza',
		define: {
			API_BASE_URL: isDevelopment ? JSON.stringify('') : JSON.stringify('/api'),
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: 'src/setupTests',
			mockReset: true,
		},
	};
});
