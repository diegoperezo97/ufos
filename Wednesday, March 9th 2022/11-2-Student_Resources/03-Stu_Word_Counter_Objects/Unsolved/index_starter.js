// Initialize the function
function wordCount(myString){
  // Convert string to an array of words
  var stringArray = myString.split(" ");

  // An object to hold word frequency
  var wordFrequency = {};

  // Iterate through the array and count the occurrence of each word
  stringArray.forEach((currentWord) => {
    if(Object.keys(wordFrequency).includes(currentWord)){
      // Yes: Increment by 1
      wordFrequency[currentWord] += 1;
      // No: Initialize at 1
    } else {
      wordFrequency[currentWord] = 1;
    }
  })

  console.log(wordFrequency)
  return wordFrequency

}
//  Call the function with the string as a parameter.
wordCount("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")