//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function findSum(num10, string8, one) {
    string8 = parseInt(string8);
    var sum = num10 + string8 + one;
    console.log(sum);
}

findSum(num10, string8, one);



//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function findNumbers() {
    var findDivisible = [];
    for (var i = 20; i < 101; i++) {
        if (i % 3 == 0) {
            findDivisible.push(i);
        } 
    }  console.log(findDivisible);
}
findNumbers();



//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

function findAverage(scores) {
    scoresTotal = 0;
    average = 0;
    for (var i = 0; i < scores.length; i++) {
        scoresTotal += scores[i];
    } average = scoresTotal/scores.length;
    console.log(average);
} 

findAverage(scores);