// if Opcode = 1 
function alertOne(nextFour){
    let valOne = listNumbers[nextFour[1]];
    let valTwo = listNumbers[nextFour[2]];
    let total = parseInt(valOne) + parseInt(valTwo);
    listNumbers[nextFour[3]] = total.toString();
}

// if Opcode = 2 
function alertTwo(nextFour){
    let valOne = listNumbers[nextFour[1]];
    let valTwo = listNumbers[nextFour[2]];
    let total = parseInt(valOne) * parseInt(valTwo);
    listNumbers[nextFour[3]] = total.toString();
}

const numbers = "1,1,1,4,99,5,6,0,99";
let listNumbers = numbers.split(",");
let index = 0;
while(listNumbers.slice(index, index+4).length > 0){
    let nextFour = listNumbers.slice(index, index+4);
    if (nextFour[0] == '99'){
        index = index + 1;
    }
    else if (nextFour[0] == '1'){
        alertOne(nextFour);
        index = index + 4;
    }
    else if (nextFour[0] == '2'){
        alertTwo(nextFour);
        index = index + 4;
    }
    else {
        break;
    }
}

// For testing print output of listNumbers at the end
listNumbers.forEach(function(entry) {
    console.log(entry);
});
