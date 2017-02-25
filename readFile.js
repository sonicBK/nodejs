var fs = require('fs');
content = fs.readFileSync(__dirname + './doc.docx');
console.log(content.toString());