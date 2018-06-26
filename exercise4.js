const fs = require('fs');

const path = process.argv[2];
const content = fs.readFile(path, 'utf-8', (err, content) => {
    if (err) {
        return console.log(err);
    }
    const newLinesCount = content.split('\n').length - 1;
    console.log(newLinesCount);
});
