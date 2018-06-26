const args = process.argv.slice(2);
const sum = args.reduce((total, arg) => total + Number(arg), 0);

console.log(sum);
