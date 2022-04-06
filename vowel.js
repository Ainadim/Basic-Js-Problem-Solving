5. How would you determine the number of vowels in a sentence?

const vowel = 'aeiou'
let count = 0;

const allString = str => {
    for (let i = 0; i < str.length; i++) {
        if (vowel.indexOf(str[i].toLowerCase ()) > -1) {
            count ++
        }
    }
} 
allString ('My name is Arafin & I am learning JavaScript AEIOU');

console.log('There are total ' + count + ' vowel in the sentence');