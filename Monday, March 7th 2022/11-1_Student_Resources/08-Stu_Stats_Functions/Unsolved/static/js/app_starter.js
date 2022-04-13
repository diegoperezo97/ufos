var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

var sum = 0;
var score;

function mean(array){
    for(i = 0; i < movieScore.length; i++){
        
        score = movieScore[i];
        sum += score;

    }

    var meanValue =  sum / movieScore.length;

    return meanValue
}

var sum = 0;

function variance(array){
    var meanValue = mean(array)
    for(i = 0; i < movieScore.length; i++){
        
        var delta = (movieScore[i] - meanValue)**2;
        sum += delta;

    }
    
    var varianceValue = sum / movieScore.length

    return varianceValue
}

function standardDeviation(value){
    
    var varianceValue = variance(movieScore);

    var standardDeviationValue = Math.sqrt(varianceValue);

    return standardDeviationValue;

}

console.log(mean(movieScore))
console.log(variance(movieScore))
console.log(standardDeviation(variance(movieScore)))