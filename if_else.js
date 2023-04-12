let firstVal = Math.floor(Math.random()*100)
let secondVal = Math.floor(Math.random()*100)
let thirdVal = Math.floor(Math.random()*100)
let max=0;
let min=1000;

if(firstVal>secondVal && firstVal>thirdVal){
    console.log("MAX value = " + firstVal)
}
if(secondVal>firstVal && secondVal>thirdVal){
    console.log("MAX value = " + secondVal)
}
if(thirdVal>firstVal && thirdVal>secondVal){
    console.log("MAX value = " + thirdVal)
}
if(firstVal<secondVal && firstVal<thirdVal){
    console.log("MIN value = " + firstVal)
}
if(secondVal<firstVal && secondVal<thirdVal){
    console.log("MIN value = " + secondVal)
}
if(thirdVal<firstVal && thirdVal<secondVal){
    console.log("MIN value = " + thirdVal)
}


const prompt = require("prompt-sync")();

let date = prompt("Plz enter date ");
let month = prompt("Plz enter month ");

if(month==4 || month== 5){
    console.log("True")
}else if(month==3){
    if (date>=20 && date <=31){
        console.log("True")
    }
}else if(month == 6){
    if (date<=20 && date >=1){
        console.log("True")
    } 
} else console.log("False");

// Leap Year
let yearToCheck = prompt("Plz enter year ");
let leap = yearToCheck % 4
let year = yearToCheck % 400
let century = yearToCheck % 100
if (year == 0){
    console.log("its a leap year")
} else  if(leap == 0) {
            if(century == 0){
              console.log("its a non leap year")
            }else console.log("its a leap year")
        }
else console.log("its a non leap year");

// TOSS
let toss = Math.floor(Math.random()*10)%2
console.log("coin is flipped and its ...")
if  (toss==1){
    console.log("head")
}
else console.log("tail");
