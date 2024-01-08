function duplicates(arr1,arr2){
    let merge = [...arr1,...arr2]
    let unique = [...new Set(merge)]
    let duplicate =[]
    for (let i = 0; i < unique.length; i++){
        if (merge.filter(x => x==unique[i]).length > 1){
            for (let j = merge.filter(x => x==unique[i]).length-1; j!=0; j--){
                duplicate.push(unique[i])
            }
        }
    }
    return duplicate
}

let x = [2,3,4,5,1,6,5,3,6,2]
let y = [1,4,7,8,11,9,2,6,9]
console.log("Combined Array:",[...x,...y])
console.log("Duplicate Values:",[...new Set(duplicates(x,y))])
console.log("Duplicate Values:", duplicates(x,y))