const prompt = require("prompt-sync")();

let numb = prompt("Plz enter single digit Numb - ");
switch(+numb){

    case 1:  console.log("Number entered = One ");
        break;
    case 2:  console.log("Number entered = Two ");
        break;
    case 3:  console.log("Number entered = Three ");
        break;
    case 4:  console.log("Number entered = Four ");
        break;
    case 5:  console.log("Number entered = Five ");
        break;
    case 6:  console.log("Number entered = Six ");
        break;
    case 7:  console.log("Number entered = Seven ");
        break;
    case 8:  console.log("Number entered = Eight ");
        break;
    case 9:  console.log("Number entered = Nine" );
        break;
    case 0:  console.log("Number entered = Zero ");
        break;
    default : console.log("Wrong input")
        break;
}



let day = prompt("Plz enter numb 1-7 for Days - ");

switch(+day){
    case 1:  console.log("Sunday" );
        break;
    case 2:  console.log("Monday" );
        break;
    case 3:  console.log("Tuesday" );
        break;
    case 4:  console.log("Wednesday" );
        break;
    case 5:  console.log("Thursday" );
        break;
    case 6:  console.log("Friday" );
        break;
    case 7:  console.log("Saturday" );
        break;
    default : console.log("Wrong input")
        break;
}


let tensNumb = prompt("Plz enter numb as 1/10/100.. - ");

switch(+tensNumb){
    case 1:  console.log("unit" );
        break;
    case 10:  console.log("Ten" );
        break;
    case 100: console.log("Hundred" );
        break;
    case 1000: console.log("Thousand" ) ;
        break;
    case 10000: console.log("Ten Thousand" );
        break;
    case 100000: console.log("Lakh" );
        break;
    default : console.log("Wrong input")
        break;
}
