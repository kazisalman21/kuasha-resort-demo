import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://kuasha.example',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto', assets: 'assets' },
  compressHTML: true,
});
