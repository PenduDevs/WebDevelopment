//- Write a JavaScript that return true if number is 50, false otherwise.
function is50(a) {
    return a == 50
}
//- Wrtite a program that take two numbers and return the bigger one
function printBigger(a, b) {
    return a > b ? a : b
}


//- Write a JavaScript program to check if sum of two given numbers is less than 50
function sumIsLessThan50(a, b) {
    return (a + b) < 50
}


//- Write a JavaScript program to determine whether a given year is a leap year
function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(year, " is leap year out")
    }
    else if (year % 4 == 0 && year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year, " is leap year in")
        }
        else console.log(year, " is Not leap year in")
    }
    else console.log(year, " is Not leap year out")
}


//- Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
function printPositiveAndNegative(a, b) {
    var str = ""
    str += a < 0 ? "A is negative" : "A is positive"
    str += b < 0 ? " And B is negative" : " And B is positive"
    return str
}


//- Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit
//c  = (f - 32) 5/ 9 
// f = 9/5c + 32

function toFahrenheit(c) {
    return f = c * 9 / 5 + 32
}

function toCelsius(f) {
    return c = (f - 32) * 5 / 9
}




//- Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
function is50(a, b) {
    return a == 50 ? true : b == 50 ? true : (a + b) == 50 ? true : false
}