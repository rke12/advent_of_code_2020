const intcode = (numbers, restore = false, seedOne = 12, seedTwo = 2) => {
    let listNumbers = numbers.split(",").map(x => parseInt(x.trim()));

    if (restore){
        listNumbers[1] = seedOne;
        listNumbers[2] = seedTwo;
    }

    let index = 0;
    let opcode = listNumbers[index];

    while(opcode != 99){

        opcode = listNumbers[index];

        let firstPosition = listNumbers[index + 1];
        let secondPosition = listNumbers[index + 2];
        let finalPosition = listNumbers[index + 3];

        switch (opcode) {
            case 1: {
                const sum = listNumbers[firstPosition] + listNumbers[secondPosition];
                listNumbers[finalPosition] = sum;
            }; 
            break;
            case 2: {
                const product = listNumbers[firstPosition] * listNumbers[secondPosition];
                listNumbers[finalPosition] = product;
            }; 
            break;
        };
        index += 4; 
    }
    return listNumbers;
}
module.exports = intcode;
