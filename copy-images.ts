import * as fs from 'fs';
import * as path from 'path';
import { globSync } from 'glob';

// 画像ファイルをコピーする関数
function copyDir(src: string, dest: string): void {
  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  try {
    // ディレクトリ内のファイルを読み取り
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      // ディレクトリの場合は再帰的にコピー
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        // ファイルの場合はコピー
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${srcPath} -> ${destPath}`);
      }
    }
  } catch (error) {
    console.error(`Error copying directory ${src} to ${dest}:`, error);
  }
}

// 特定のファイルパターンをコピーする関数
function copyPatterns(patterns: string[], destDir: string): void {
  for (const pattern of patterns) {
    try {
      const files = globSync(pattern);
      for (const file of files) {
        const destPath = path.join(destDir, path.basename(file));
        const destSubDir = path.dirname(destPath);
        
        // ディレクトリが存在しない場合は作成
        if (!fs.existsSync(destSubDir)) {
          fs.mkdirSync(destSubDir, { recursive: true });
        }
        
        fs.copyFileSync(file, destPath);
        console.log(`Copied pattern match: ${file} -> ${destPath}`);
      }
    } catch (error) {
      console.error(`Error copying pattern ${pattern}:`, error);
    }
  }
}

// メイン処理
function main(): void {
  try {
    console.log('Copying images from public/images to dist/images...');
    
    // publicディレクトリからdistディレクトリへ画像をコピー
    copyDir('public/images', 'dist/images');
    
    // 追加のパターンを指定してコピー
    copyPatterns(['public/images/*.jpg', 'public/images/*.png'], 'dist/images');
    
    console.log('Images copied successfully!');
  } catch (error) {
    console.error('Error in copy operation:', error);
    process.exit(1);
  }
}

// スクリプト実行
main(); 