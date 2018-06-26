const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
    fs.readdir(dir, (err, fileNames) => {
        if (err) {
            return callback(err);
        }
        const resFileNames = fileNames.filter(fileName => path.extname(fileName) === `.${ext}`);
        callback(null, resFileNames);
    });
};
