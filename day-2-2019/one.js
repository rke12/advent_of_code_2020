const mainString;
const mainListArray = mainString.split(',');

// if Opcode = 1, pass the next 3 values in an array 
function alertOne(numbers){
    let valOne = getValueAtPosition(numbers[0]);
    let valTwo = getValueAtPosition(numbers[1]);
    setValueAtPosition(valOne + valTwo, numbers[2]);
}

// if Opcode = 2, pass the next 3 values in an array 
function alertTwo(numbers){
    let valOne = getValueAtPosition(numbers[0]);
    let valTwo = getValueAtPosition(numbers[1]);
    setValueAtPosition(valOne * valTwo, numbers[2]);
}

// if Opcode = 99, return null to kill the program
function alertNinetyNine(){
    return false;
}

function getValueAtPosition(position){
    return mainListArray[position];
}

function setValueAtPosition(position, value){
    mainListArray[position] = value;
}

function main(){
    let loopBreak = true;
    let index = 0;
    while(loopBreak){
        if(mainListArray[index] == 1){
            alertOne(mainListArray.slice(index, index+4));
        }
        else if(mainListArray[index] == 2){
            alertTwo(mainListArray.slice(index, index+4));
        }
        else{
            loopBreak = alertNinetyNine();
        }
        index = index + 4;
    }
}