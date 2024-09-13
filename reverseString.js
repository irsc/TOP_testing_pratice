function reverseString(string){
    let reversed = "";
    for (let index = string.length-1; index >= 0; index--) {
        reversed = reversed.concat('',string[index]);
    }
    return reversed;
}

module.exports = reverseString;