let arr1 = [2,3,4,5,1,6,5,3,6,2,6]
let arr2 = [1,4,7,8,11,9,2,6,9]
let arr = [...new Set(arr1.concat(arr2))]
console.log(arr)