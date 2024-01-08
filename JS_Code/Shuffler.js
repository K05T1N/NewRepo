
function shuffler(arr){  
    let temp, randomTemp, currentIndex = arr.length -1
    while (currentIndex >= 0){
        randomTemp = Math.floor(Math.random()*arr.length)
        temp = arr[currentIndex]
        arr[currentIndex] = arr[randomTemp]
        arr[randomTemp] = temp
        currentIndex--
    }
    return arr
}

let playlist = ["Banished", "Benzi Box", "Accordion", "Questions", "Bistro", "Space Hos", "One Beer", "Kon Queso", "Rhinestone Cowboy", "All Caps", "Great Day"]

console.log("Shuffled playlist: ", shuffler(playlist))
