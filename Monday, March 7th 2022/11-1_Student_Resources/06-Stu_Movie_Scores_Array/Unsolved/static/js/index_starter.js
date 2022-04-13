// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

var score;

for(var i = 0; i < movieScores.length; i++){

  score = movieScores[i];

  sum += score; 

  if(movieScores[i] > 7){
    goodMovieScores.push(movieScores[i])
  } else if(movieScores[i] > 5 && movieScores[i] <= 7){
    okMovieScores.push(movieScores[i])
  } else if(movieScores[i] < 5){
    badMovieScores.push(movieScores[i])
  }
}

console.log(`avgRating: ${sum / movieScores.length}`)
console.log(`goodMovieScores: ${goodMovieScores.length}`)
console.log(`okMovieScores: ${okMovieScores.length}`)
console.log(`badMovieScores: ${badMovieScores.length}`)