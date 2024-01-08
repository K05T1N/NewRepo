function palindrome(){
    let word = prompt("Enter a lowercase word:", "example")
    if (word != null){
        var test = ""
        for (let i = word.length; i >= 0; i--){
            test += word.charAt(i)
        }
        if (test == word){
            document.getElementById("scripting").innerHTML = word + " is a palindrome."
        }
        else{
            document.getElementById("scripting").innerHTML = word + " isn't a palindrome."
        }   
    }
    else{
        document.getElementById("scripting").innerHTML = "You entered nothing."
    }
}