// 2. How can you order roll numbers of students in your class sequentially? sequentially & unique (remove duplicate)

const roll2 = [5,6,40,250,410,4,1,5,83,8,41,2]

const allData = roll2.sort (name2 = (a,b) => {
    return a-b
});

const unique = [...new Set(allData)];

console.log(unique);