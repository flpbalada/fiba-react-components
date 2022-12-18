import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import * as packageJson from './package.json'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsConfigPaths(),
		dts(),
		viteStaticCopy({
			targets: [
				{
					src: 'README.md',
					dest: '',
				},
			],
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/main.tsx'),
			name: 'fiba',
			formats: ['es', 'umd'],
			fileName: format => `fiba.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
		},
	},
})
