const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'images-raw');
const outputDir = path.join(__dirname, 'images');
const outputPluginDir = path.join(__dirname, '../ui-src/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const quality = 50; // adjust between 50–90 depending on size vs clarity
const pluginQuality = 50;

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  const allowed = ['.jpg', '.jpeg', '.png'];

  if (!allowed.includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const baseName = path.basename(file, ext);
  const outputPath = path.join(outputDir, `${baseName}.jpeg`);
  const outputPluginPath = path.join(outputPluginDir, `${baseName}.jpeg`);

  sharp(inputPath)
    .resize({ width: 240 })
    .jpeg({ quality })
    .toFile(outputPath)
    .then(() => {
      console.log(`Converted: ${file} → ${baseName}.webp`);
    })
    .catch(err => {
      console.error(`Error processing ${file}:`, err);
    });
  
  // sharp(inputPath)
  //   .resize({ width: 307 })
  //   .webp({ quality: pluginQuality })
  //   .toFile(outputPluginPath)
  //   .then(() => {
  //     console.log(`Converted: ${file} → ${baseName}.webp`);
  //   })
  //   .catch(err => {
  //     console.error(`Error processing ${file}:`, err);
  //   });
});