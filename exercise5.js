const fs = require('fs');
const path = require('path');

const [, , dir, ext] = process.argv;

fs.readdir(dir, (err, fileNamesList) => {
    if (err) {
        return console.log(err);
    }
    fileNamesList.forEach(fileName => {
        if (path.extname(fileName) === `.${ext}`) {
            console.log(fileName);
        }
    });
});
