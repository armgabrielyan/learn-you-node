const filterFileNames = require('./filterFileNames');

const [, , dir, ext] = process.argv;

filterFileNames(dir, ext, (err, fileNames) => {
    if (err) {
        return console.error('Error occurred: ', err);
    }
    fileNames.forEach(fileName => console.log(fileName));
});
