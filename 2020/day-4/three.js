let string = "hgt:59cm byr:2029 cid:219 pid:9381688753 eyr:1992 hcl:\#b6652";
let regex = /hgt:(?<hgt>\w+)/;
let capture = string.match(regex);
console.log(Object.keys(capture.groups)[0]);