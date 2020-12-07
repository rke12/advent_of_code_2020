const expenseListThree = (expenses, target = 2020) => {
    for(let firstLoop = 0; firstLoop < expenses.length; firstLoop++){
        for(let secondLoop = 0; secondLoop < expenses.length; secondLoop++){
            for(let thirdLoop = 0; thirdLoop < expenses.length; thirdLoop++){
                if(expenses[firstLoop] + expenses[secondLoop] + expenses[thirdLoop] == target){
                    return expenses[firstLoop] * expenses[secondLoop] * expenses[thirdLoop];
                }
            }
        }
    }
};
module.exports = expenseListThree;

const fs = require("fs");
let text = fs.readFileSync("./expenses.txt", "utf-8");
let expenses = text.split("\n").map(x => parseInt(x.trim()));
let result = expenseListThree(expenses.sort((a, b) => b - a));
console.log(result);