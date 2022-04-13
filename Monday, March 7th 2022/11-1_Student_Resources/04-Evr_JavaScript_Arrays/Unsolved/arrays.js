// A JavaScript array is much like a Python list
// Here, start with a blank array
var lettersArray = ["a", "b", "c", "d"]

// Display the array in console
console.log("Array of letters:")
console.log(lettersArray)

// Use indexing to access an array item
console.log("First two elements:")
var firstLetter = lettersArray[0]
var secondLetter = lettersArray[1]

console.log(firstLetter)
console.log(secondLetter)

// Use push() to append an item to an array
lettersArray.push("e")
lettersArray.push("f")

// Use slice() to return selected items of an array
var slicedArray1 = lettersArray.slice(1)

// Return the first three items of an array
var slicedArray2 = lettersArray.slice(0, 3)

// Return the second and third items of an array
var slicedArray2 = lettersArray.slice(1, 3)

// Use join() to return items of an array into a single string
var joinedLetters = lettersArray.join(", ")
console.log(joinedLetters)

// A JavaScript string
var soundOfMusic = "The hills are alive with the sound of music."

// Use indexing to access a string character
console.log(soundOfMusic[2])
console.log(soundOfMusic[4])

// Split a string into an array of substrings
// Here, split the string where spaces are found
var soundAray = soundOfMusic.split(" ")
console.log(soundArray)
