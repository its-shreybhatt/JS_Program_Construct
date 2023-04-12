const prompt = require("prompt-sync")();

// let numb = prompt("Plz enter single digit Numb - ");
// if(numb == 1)
//     console.log("One")
// else if (numb == 2)
//     console.log("Two")
// else if (numb == 3)
//     console.log("Three")
// else if (numb == 4)
//     console.log("Four")
// else if (numb == 5)
//     console.log("Five")
// else if (numb == 6)
//     console.log("Six")
// else if (numb == 7)
//     console.log("Seven")
// else if (numb == 8)
//     console.log("Eight")
// else if (numb == 9)
//     console.log("Nine")
// else if (numb == 0)
//     console.log("Xero")


// let day = prompt("Plz enter numb 1-7 for Days - ");
// if(day == 1)
//     console.log("Sunday")
// else if (day == 2)
//     console.log("Monday")
// else if (day == 3)
//     console.log("Tuesday")
// else if (day == 4)
//     console.log("Wednesday")
// else if (day == 5)
//     console.log("Thursday")
// else if (day == 6)
//     console.log("Friday")
// else if (day == 7)
//     console.log("Saturday")


// let tensNumb = prompt("Plz enter numb as 1/10/100.. - ");
// if (tensNumb == 1)
//     console.log("unit")
// else if (tensNumb == 10)
//     console.log("Ten")
// else if (tensNumb == 100)
//     console.log("Hundred")
// else if (tensNumb == 1000)
//     console.log("Thousand")
// else if (tensNumb == 10000)
//     console.log("Ten Thousand")
// else if (tensNumb == 100000)
//     console.log("Lakh")
// else console.log("out of range")


// Max Min
let a = prompt("Plz enter first numb - ");
let b = prompt("Plz enter second numb - ");
let c = prompt("Plz enter third numb - ");


let arithmaticFirst = (+a+(+b * +c));
let arithmaticSecond = +a % +b + +c;
let arithmaticThird = +c + +a / +b;
let arithmaticFourth = +a * (+b + +c);

console.log(arithmaticFirst + " , " + arithmaticSecond + " , " + arithmaticThird + " , " + arithmaticFourth );
const numbArray = [arithmaticFirst , arithmaticSecond , arithmaticThird , arithmaticFourth ];

let max = 0;
let min = 1000;
for(let i=0 ; i<numbArray.length ; i++ ){
    if(numbArray[i] > max )
    max = numbArray[i]
    if(numbArray[i] < min )
    min = numbArray[i]
}
console.log("Maximum Value = " + max + "    " + "Minimum Value = " + min) 