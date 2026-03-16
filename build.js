const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/__GOOGLE_CLIENT_ID__/g, process.env.GOOGLE_CLIENT_ID || '');
html = html.replace(/__DRIVE_FOLDER_ID__/g, process.env.DRIVE_FOLDER_ID || '');

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);

console.log('Build OK');
