var fs = require('fs');
content = fs.readFileSync('./doc.docx');
console.log(content.toString());