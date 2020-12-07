function checkRegex(string, expression){
    let tmp = string.match(expression);
    if(tmp != null){
        return true;
    }
}

const passport_list = (expenses) => {
    let counter = 0;
    for(let index = 0; index < expenses.length; index++){
        expenses[index] = expenses[index];
        console.log(expenses[index]);
        let hgt = checkRegex(expenses[index], /hgt(?<tmp>)/);
        let ecl = checkRegex(expenses[index], /ecl(?<tmp>:)/);
        let pid = checkRegex(expenses[index], /pid(?<tmp>:)/);
        let eyr = checkRegex(expenses[index], /eyr(?<tmp>:)/);
        let hcl = checkRegex(expenses[index], /hcl(?<hcl>:)/);
        let byr = checkRegex(expenses[index], /byr(?<byr>:)/);
        let iyr = checkRegex(expenses[index], /iyr(?<iyr>:)/);

        if(hgt && ecl && pid && eyr && hcl && iyr && byr){
            counter++;
        }
    }
    console.log(counter);
}

const fs = require("fs");
let text = fs.readFileSync("./passports_tmp.txt", "utf-8");
let expenses = text.split("\n\n");
console.log(expenses)
passport_list(expenses);
