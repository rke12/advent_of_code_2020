function checkRegex(string, expression){
    let tmp = string.match(expression);
    if(tmp != null){
        return tmp;
    }
}

function checkHeight(string, expression){
    if(checkRegex(string, expression) != null){
        let height = checkRegex(string, expression);
        if(height.groups.type == "cm"){
            if(height.groups.height >= 150 && height.groups.height <= 193){
                return true;
            }
        }
        else{
            if(height.groups.height >= 59 && height.groups.height <= 76){
                return true;
            }    
        }
    }
    return false;
}

const includeArray = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
function checkEyeColour(string, expression){
    if(checkRegex(string, expression) != null){
        let eyeColour = checkRegex(string, expression);
        if(includeArray.includes(eyeColour.groups.ecl)){
            return true;
        }
    }   
    return false;
}
    
function checkPID(string, expression) {
    if(checkRegex(string, expression) != null) {
        let pid = checkRegex(string, expression);

        if(pid.groups.pid.length == 9) {
            return true;
        }
        return false;
    }
}

function checkYear(string, expression) {
    if(checkRegex(string, expression) != null) {
        let year = checkRegex(string, expression);

        if(Object.keys(year.groups)[0] == "eyr"){
            if(year.groups.eyr >= 2020 && year.groups.eyr <= 2030){
                return true;
            }
        } 
        else if (Object.keys(year.groups)[0] == "byr") {
            if(year.groups.byr >= 1920 && year.groups.byr <= 2002){
                return true;
            }
        }
        else if (Object.keys(year.groups)[0] == "iyr"){
            if(year.groups.iyr >= 2010 && year.groups.iyr <= 2020){
                return true;
            }
        }
    }
    return false;
}

function checkHairColour(string, expression){
    if(checkRegex(string, expression) != null){
        let hairColour = checkRegex(string, expression);
        if(hairColour.groups.hcl.length == 7){
            return true;
        }
    }
    return false;
}

const passport_list = (expenses) => {
    let counter = 0;
    for(let index = 0; index < expenses.length; index++){
        expenses[index] = expenses[index].replace("\n", " ");
        let hgt = checkHeight(expenses[index], /hgt:(?<height>\d+)(?<type>\w+)/);
        let ecl = checkEyeColour(expenses[index], /ecl:(?<ecl>\w+)/);
        let pid = checkPID(expenses[index], /pid:(?<pid>\d+)/);
        let eyr = checkYear(expenses[index], /eyr:(?<eyr>\d+)/);
        let hcl = checkHairColour(expenses[index], /hcl:(?<hcl>#[0-9a-f]+)/);
        let byr = checkYear(expenses[index], /byr:(?<byr>\d+)/);
        let iyr = checkYear(expenses[index], /iyr:(?<iyr>\d+)/);

        if(hgt && ecl && pid && eyr && hcl && byr && iyr){
            counter++;
        }
    }
    console.log(counter);
}

const fs = require("fs");
let text = fs.readFileSync("./passports.txt", "utf-8");
let expenses = text.split("\n\n");
passport_list(expenses);
