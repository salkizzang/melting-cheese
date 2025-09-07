// Collection 컴포넌트 제거를 위한 임시 스크립트
const fs = require('fs');
const path = require('path');

const filePath = '/Users/salki/workspace/storage/game/memory-test/components/melting-cheese.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Collection 컴포넌트 시작과 끝 찾기
const lines = content.split('\n');
let startIndex = -1;
let endIndex = -1;
let braceCount = 0;
let inCollection = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const Collection = () => {')) {
    startIndex = i;
    inCollection = true;
    braceCount = 1;
    continue;
  }
  
  if (inCollection) {
    // 중괄호 카운팅
    const openBraces = (lines[i].match(/\{/g) || []).length;
    const closeBraces = (lines[i].match(/\}/g) || []).length;
    braceCount += openBraces - closeBraces;
    
    if (braceCount === 0 && lines[i].includes('};')) {
      endIndex = i;
      break;
    }
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  // Collection 컴포넌트 제거
  const newLines = [
    ...lines.slice(0, startIndex),
    ...lines.slice(endIndex + 1)
  ];
  
  const newContent = newLines.join('\n');
  fs.writeFileSync(filePath, newContent);
  console.log(`Removed Collection component (lines ${startIndex + 1} to ${endIndex + 1})`);
} else {
  console.log('Collection component not found or could not determine boundaries');
}