console.log("Hello");

let a=10
let b = 20
let c = a+b
console.log("Sum of 2 numb = " + c);

console.log("Random value = " + Math.floor(Math.random()*10)%6)

let first = Math.floor(Math.random()*10)%6
let second = Math.floor(Math.random()*10)%6
let output = first+second
console.log("Sum of 2 randoms = " + output)

let firstVal = Math.floor(Math.random()*100)
let secondVal = Math.floor(Math.random()*100)
let thirdVal = Math.floor(Math.random()*100)
let sumOfRandom = firstVal+secondVal+thirdVal
let avgOfRandom = sumOfRandom/3
console.log("sum = " + sumOfRandom);
console.log("average = " + avgOfRandom);

// unit conversion
let inchesToFeet = 1/12 *42
let feetToMeters = 0.3048 *60*40
console.log("42 inches = " + inchesToFeet)
let plots25 = 25 * feetToMeters
let inAcres = plots25 * 0.000247105
console.log("Area of 25 plots in Acres = " + inAcres);