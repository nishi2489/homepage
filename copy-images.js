const fs = require('fs');
const path = require('path');

// 画像ファイルをコピーする関数
function copyDir(src, dest) {
  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

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
}

// publicディレクトリからdistディレクトリへ画像をコピー
console.log('Copying images from public/images to dist/images...');
copyDir('public/images', 'dist/images');
console.log('Images copied successfully!'); 