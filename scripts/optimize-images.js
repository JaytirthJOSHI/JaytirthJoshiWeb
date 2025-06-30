import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/Images');
const outputDir = path.join(__dirname, '../public/images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(inputDir, file);
        const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputPath = path.join(outputDir, outputName);
        
        console.log(`Optimizing ${file} to ${outputName}...`);
        
        await sharp(inputPath)
          .webp({ 
            quality: 80,
            effort: 6,
            nearLossless: true
          })
          .resize(1200, 1200, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .toFile(outputPath);
        
        // Also create a smaller version for mobile
        const mobileName = file.replace(/\.(jpg|jpeg|png)$/i, '-mobile.webp');
        const mobilePath = path.join(outputDir, mobileName);
        
        await sharp(inputPath)
          .webp({ 
            quality: 70,
            effort: 6
          })
          .resize(600, 600, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .toFile(mobilePath);
        
        console.log(`✓ Created ${outputName} and ${mobileName}`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();