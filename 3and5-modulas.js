function number(num) {
    for (let i = 0; i < num; i++) {
        const element = num[i];
        if (i % 15 === 0) {
            console.log(`${i} is modules by both 3 & 5`)
        }
        else if (i % 3 === 0) {
            console.log(`${i} is modules by 3`)
        }
        else if (i % 5 === 0) {
            console.log(`${i} is modules by 5`)
        }
        else {
            console.log(`${i}`)
        }
    }
}
number(50)

