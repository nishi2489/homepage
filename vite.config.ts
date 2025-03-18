import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 3000,
    host: true,
    open: false,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'copy-images',
      closeBundle() {
        const publicDir = resolve(__dirname, 'public');
        const outDir = resolve(__dirname, 'dist');
        
        // 画像ディレクトリを明示的にコピー
        const srcImgDir = resolve(publicDir, 'images');
        const destImgDir = resolve(outDir, 'images');
        
        if (!existsSync(destImgDir)) {
          mkdirSync(destImgDir, { recursive: true });
        }
        
        console.log('Auto-copying images during build...');
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0,
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (assetInfo.name && /\.(jpe?g|png|gif|svg|webp)$/i.test(assetInfo.name)) {
            return `images/[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    }
  },
  publicDir: 'public',
}));
