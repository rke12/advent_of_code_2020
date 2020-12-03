let passwordNumber = 0;
let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./passwords.txt')
});
lineReader.on('line', function (line) {
    vals = line.match(/^(?<min_val>\d+)-(?<max_val>\d+)\s+(?<letter>[\w]):\s+(?<string>[a-z]+)/)
    let min_val = vals.groups.min_val;
    let max_val = vals.groups.max_val;
    let letter = vals.groups.letter;
    let string = vals.groups.string;
    let re = new RegExp(letter, 'g');
    if(string.match(re) != null){
        let count = string.match(re).length;
        console.log("string: " + string);
        if(count <= max_val && count >= min_val){
            passwordNumber += 1;
        }
    }
    
    console.log(passwordNumber);
});

