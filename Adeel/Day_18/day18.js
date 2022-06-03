// Write a JavaScript that return true if number is 50, false otherwise.

function is50(a){
    return a==50 ? true : false;
}


// Wrtite a program that take two numbers and return the bigger one

function printBigger(a,b){
    return a>b ? a : b;
}


// Write a JavaScript program to check if sum of two given numbers is less than 50

function sumIsLessThan50(a,b){
    return a+b < 50 ? `The Sum Is Less Than 50` : `The Sum Is Not Less Than 50`;
}


//  Write a JavaScript program to determine whether a given year is a leap year

function isLeapYear(year){
    return year % 4 == 0 && year % 100 != 0 ?  `${year} is a Leap Year` : `${year} is not a Leap Year`;
}



// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

function printPositiveAndNegative(number){
    if (number > 0) {
        console.log(`${number} is positive`);
    }
    if (number < 0) {
        console.log(`${number} is Negative`);
    }
    if (number == 0) {
        console.log(`${number} is Zero`);
    }
}

function check(a,b){
    printPositiveAndNegative(a);
    printPositiveAndNegative(b);
}


//  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit

function FahrenHeitToCelsius(fahrenHeit){
    return (fahrenHeit - 32) * 5/9;
}


function CelsiusToFahrenHeit(celsius){
    return (celsius * 9/5) + 32;
}


// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function is50(num1, num2){
    return num1 == 50 || num2 == 50 ? true : num1+num2 == 50;
}