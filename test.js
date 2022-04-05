/* 1. Write a function that can print any random number between any two given numbers (including them).

const randomNumber = (min, max) => {
    console.log(Math.floor(Math.random () * (max - min + 1)) + min);
}
randomNumber (1, 6);

2. How can you order roll numbers of students in your class sequentially? sequentially & unique (remove duplicate)

const roll2 = [5,6,40,250,410,4,1,5,83,8,41,2]

const allData = roll2.sort (name2 = (a,b) => {
    return a-b
});

const unique = [...new Set(allData)];

console.log(unique);


3. How can you order names of students in your class sequentially? sequentially & unique (remove duplicate)

const nameAllStudent= ['Arafin', 'Islam', 'Nadim', 'Fuad', 'Sumit', 'Nadim', 'Jhankar', 'Anisul', 'Hasin', 'Rasel', 'Sabbir']

const allUnique = [...new Set (nameAllStudent)]

console.log(allUnique);

4. Write a function that can tell us whether an year is a leap year or not.

const leap = prompt ('Enter a Number')

const leapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year + ' is Leapyear')
    }
    else {console.log(year + ' is not Leapyear')}
}

leapYear (2024);

5. How would you determine the number of vowels in a sentence?

6. How would you extract the duplicate numbers in an array?

7. How would you extract the unique numbers in an array? */



const sentence = 'My name is Arafin and I am learning JavaScript'

const allString = () => {
    for (let i = 0; i < sentence.length; i++) {
        const element = sentence[i];
        console.log(element);        
    }
}