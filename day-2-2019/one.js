const mainString;
const mainListArray = mainString.split(',');

function alertOne(numbers){
    let positionZero = numbers[0];
    let valOne = getValueAtPosition(numbers[1]);
    let valTwo = getValueAtPosition(numbers[2]);
    setValueAtPosition(valOne + valTwo, numbers[3]);
}

function getValueAtPosition(position){
    return mainListArray[position];
}

function setValueAtPosition(position, value){
    mainListArray[position] = value;
}