function caesarCipher(string, shifted){

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";

    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if(!alphabet.includes(element) && !alphabetUpper.includes(element)){
            newString += element;
        }else if(element === element.toLowerCase()){
            let character = alphabet.indexOf(element);
            character += shifted;
            if(character > 25) character -= 26;
            newString += alphabet[character];
        }else if (element === element.toUpperCase()){
            let character = alphabetUpper.indexOf(element);
            character += shifted;
            if(character > 25) character -= 26;
            newString += alphabetUpper[character];
        }
        
    }

    return newString;
}

module.exports = caesarCipher;