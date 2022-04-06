// 3. How can you order names of students in your class sequentially? sequentially & unique (remove duplicate)

const nameAllStudent= ['Arafin', 'Islam', 'Nadim', 'Fuad', 'Sumit', 'Nadim', 'Jhankar', 'Anisul', 'Hasin', 'Rasel', 'Sabbir']

const allUnique = [...new Set (nameAllStudent)]

console.log(allUnique);