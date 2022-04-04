// function allSentence(str) {
//     let vowel = 'aeiou'; 
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//        if (vowel.indexOf(str[i].toLowerCase ()) > -1) {
         
//            console.log(count++)
//        }
//     }
//     return "This is" + count + "vowel";
// }
// allSentence('I love Bangladesh America');

function allSentence(str) {
    let count = 0;
    let vowel = 'aeiou'
    for (let i = 0; i < str.length; i++) {
       if (vowel.indexOf (str[i].toLowerCase ()) > -1) {
            count ++;
        };
    }
    return console.log('This is ' + count + ' vowel here.');
}


allSentence ('This is the biggest event ever I see')