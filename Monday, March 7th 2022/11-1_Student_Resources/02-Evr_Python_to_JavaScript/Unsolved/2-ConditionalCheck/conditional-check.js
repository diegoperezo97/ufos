var x = 1;
var y = 10;

// Checks if one value is equal to another
if(x === "1"){
    console.log("x is equal to 1.");
} else {
    console.log("x is not equal to 1.")
}

// Checks if one value is NOT equal to another
if(y !== 1){
    console.log("y is not equal to 1.");
} 

// Checks if one value is less than another
if(x < y){
    console.log("x is less than 1.");
} 

// Checks if one value is greater than another
if(x > y){
    console.log("x is greater than 1.");
} 

// Checks if a value is less than or equal to another
if(x <= y){
    console.log("x is greater than 1.");
} 

// Checks for two conditions to be met using &&
if (x === 1 && y === 10){
    console.log("One AND the other elements were equal.")
}

// Checks if either of two conditions is met using ||
if (x === 1 || y === 10){
    console.log("One OR the other elements were equal.")
}

// Nested if statements
if(x === 1){
    if(y > 5){
        console.log("y is less than 5.")
    } else if (y === 5){
        console.log("y equals to 5.")
    } else {
        console.log("y is greater than 5.")
    }
}