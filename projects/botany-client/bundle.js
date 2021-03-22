const fs = require('fs');

const sources = ['package-lock.json', 'package.json'];

for (const source of sources) {
  fs.copyFileSync(source, `dist/${source}`);
}
