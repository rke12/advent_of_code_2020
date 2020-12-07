let passwordNumber = 0;
let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./passwords.txt')
});
lineReader.on('line', function (line) {
    vals = line.match(/^(?<first_index>\d+)-(?<second_index>\d+)\s+(?<letter>[\w]):\s+(?<string>[a-z]+)/)
    let first_index = vals.groups.first_index;
    let second_index = vals.groups.second_index;
    let letter = vals.groups.letter;
    let string = vals.groups.string;
    let split_string = string.split("");
    if(!(split_string[first_index-1] == letter) != !(split_string[second_index-1] == letter)){
        passwordNumber += 1;
    }
    
    console.log(passwordNumber);
});