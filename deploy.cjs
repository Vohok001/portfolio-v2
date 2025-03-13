// deploy.js - Node.js script to deploy to GitHub Pages
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Create a temp directory for the GitHub Pages branch
const tempDir = path.join(__dirname, 'temp_deploy');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir);

// Copy the build files to the temp directory
const distDir = path.join(__dirname, 'dist');
fs.cpSync(distDir, tempDir, { recursive: true });

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(tempDir, '.nojekyll'), '');

// Initialize Git in the temp directory
console.log('Initializing Git in the temp directory...');
execSync(`cd "${tempDir}" && git init && git add -A && git commit -m "Deploy to GitHub Pages"`, { stdio: 'inherit' });

// Push to the gh-pages branch
console.log('Pushing to gh-pages branch...');
const repoUrl = 'https://github.com/vohok001/portfolio-v2.git'; // Replace with your repository URL
execSync(`cd "${tempDir}" && git push -f ${repoUrl} master:gh-pages`, { stdio: 'inherit' });

// Clean up
console.log('Cleaning up...');
fs.rmSync(tempDir, { recursive: true, force: true });

console.log('Deployment complete!');
