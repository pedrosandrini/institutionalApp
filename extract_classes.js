const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.push('../app/page.tsx', '../app/layout.tsx');

let classes = new Set();
for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all className="something" or className={`something`}
  const regex = /className=(?:\"([^\"]+)\"|\`([^\`]+)\`)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const clsString = match[1] || match[2];
    if (!clsString) continue;
    
    const clsList = clsString.split(/\s+/);
    for (let cls of clsList) {
      // ignore dynamic parts like ${...}
      if (cls && !cls.includes('$') && !cls.includes('{')) {
        classes.add(cls);
      }
    }
  }
}

console.log(Array.from(classes).sort().join('\n'));
