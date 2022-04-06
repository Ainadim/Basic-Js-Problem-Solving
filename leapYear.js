4. Write a function that can tell us whether an year is a leap year or not.

const leap = prompt ('Enter a Number')

const leapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year + ' is Leapyear')
    }
    else {console.log(year + ' is not Leapyear')}
}

leapYear (2024);