const validPass = (pass) => {
    let [_, low, high, letter, password] = /(\d+)-(\d+) (.): (.+)/.exec(pass);
    low = parseInt(low);
    high = parseInt(high);
    password = [...password];

    const actual = password.reduce((p, x) => x === letter ? p + 1 : p, 0);
    return low <= actual && actual <= high ? 1 : 0;
}
module.exports = validPass;

const fs = require("fs");
const input = fs.readFileSync('./passwords.txt');
let pass = input.toString().split('\n');
console.log(pass.reduce((p, x) => p + validPass(x), 0));