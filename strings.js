 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

function uppercase(str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++){
        var letter = arr[i];
        if (letter == "i") {
            arr[i] = "I"
        }
    }
    var sentence = arr.join(" ");
    return sentence;
    /*
     sentence = sentence.split(" ");
     var newSentence = [];
     var joinSentence = [];
     for (var i = 0; i < sentence.length; i++) {
         var findI = sentence[i];
         if (findI.length < 2) {
             findI = findI.replace('i', "I");
         }
         newSentence.push(findI);        
     } joinSentence = newSentence.join(" ");
     console.log(joinSentence);*/
 }

 uppercase(sentence);


//2. The history of JavaScript is interesting but how many times does the letter a appear? 
//Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function aCount(str){
    var x = 0;
    //var sentence = str.split(" ");
    for (var i = 0; i < str.length; i++){
        var letter = str[i];
        if(letter == "a" || letter == "A"){
            x++;
        }
    }
    return x;
}
console.log(aCount(jsHistory));

/*
var countA = 0;
function findA(jsHistory) {
    var sentenceSplit = jsHistory.split("");
    for(var i = 0; i < sentenceSplit.length; i++) {
        if(jsHistory[i] == "a" || jsHistory[i] == "A"){
            countA++;
        }
    } console.log(countA);
}
findA(jsHistory);*/


//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';

function TOSCREAM(str) {
    //REGEX
return str.replace(/scream/ig, "SCREAM")
return str.split("scream").join("SCREAM")
}

console.log(TOSCREAM(text));

/*
function uppercaseScream(text) {
    var sentenceSplit = text.split(" ");
    var newSentence = [];
    var joinSentence = [];

    for (var i = 0; i < sentenceSplit.length; i++) {
        var replaceScream = "";
        replaceScream = sentenceSplit[i].replace("scream", "SCREAM");
        newSentence.push(replaceScream);
    } joinSentence = newSentence.join(" ");
    console.log(joinSentence);
} 
uppercaseScream(text);*/