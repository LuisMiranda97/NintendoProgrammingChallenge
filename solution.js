//function to count the cycle Length of an integer
function cycleLength(n){
    let c = 1;//counter variable initialized in 1 to already consider the number 1 as the final value fo the cycle
    while (n != 1){ //while loop to process until n reaches 1
        n = (n%2 === 0) ? n/2 : 3*n+1; //if/else one liner to determine the value that has to be assigned to n
        c++; //add counter by 1
    }
    return c;//return final count after n reaches 1
}

//function to find the maximum cycle length within a range
function maxCycleLengthRange(i,j) {
    let maxCount = 0; //variable to register the maxCount encountered withing the range
    let topBound = Math.max(i,j); //variable to determine the top bound of the range
    let bottomBound = Math.min(i,j); //variable to determina the bottom bound of the range
    for (n = bottomBound; n <= topBound; n++)//for loop to go through the input range and determine the maxCycleLength within the range
        maxCount = Math.max(maxCount, cycleLength(n)); 
    return maxCount;
}

//MAIN PROGRAM
var lineReader = require('readline').createInterface({ // declaring a line reader for the text file where our input data is
    input: require('fs').createReadStream('input.txt')
  });
  
  lineReader.on('line', function (line) { //function to read every line of the text file, use the integers to process the maxCycleLength
    pair = line.split(' ');
    console.log(pair[0] + " " + pair[1] + " => " + maxCycleLengthRange(pair[0],pair[1]));
  });