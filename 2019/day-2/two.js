const intcode = require('./one');

const numberFinder = (numbers, finalVal) => {
    let output = 0;
    for (let firstCode = 0; firstCode < 100; firstCode++){
        for (let secondCode = 0; secondCode < 100; secondCode++){
            output = intcode(numbers, true, firstCode, secondCode)[0];

            if(output === finalVal){
                return (100 * firstCode) + secondCode;
            }
        }
    }
}
module.exports = numberFinder;