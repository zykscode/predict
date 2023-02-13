const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const merge = (arrays) => [].concat(...arrays);
const mergedArray = merge([array1, array2, array3]);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
