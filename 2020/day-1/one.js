const expenseList = (expenses, target = 2020) => {
    while(expenses.length > 0) {
        let index = expenses.pop();
        for(let numbers = 0;  numbers < expenses.length; numbers++){
            let testNumber = index + expenses[numbers];
            if((index + expenses[numbers]) == target){
                return index * expenses[numbers];
            }
            else if(testNumber < target){
                break;
            }
        }
    }
};
module.exports = expenseList;

const fs = require("fs");
let text = fs.readFileSync("./expenses.txt", "utf-8");
let expenses = text.split("\n").map(x => parseInt(x.trim()));
let result = expenseList(expenses.sort((a, b) => b - a));
console.log(result);