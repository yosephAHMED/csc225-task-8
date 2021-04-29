// function that takes the input string and reverses it
function reverseThisString(string) {
    // error handling
    if(typeof string === 'string'){
        // split string into array of characters
        const charArray = string.split("");

        // reverse the array
        const revArray = charArray.reverse();

        // concat the elements into one string
        return revArray.join("");
    } else return "invalid arguments";
}

// function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
function swapCase(string) {
    // error handling
    if(typeof string === 'string'){

        // temp array to store new characters
        let charArray = [];

        // loop through array
        for (let i = 0; i < string.length; i++){

            // check if string is uppercase
            // if it is, make it lowercase and insert it into charArray and vise versa
            if (string.charAt(i) == string.charAt(i).toUpperCase()) {
               charArray[i] = string.charAt(i).toLowerCase();
            } 
            else { 
                charArray[i] = string.charAt(i).toUpperCase();
            }
        }
        // concat the elements into one string
        return charArray.join("");
    } else return "invalid arguments";
}

// function that converts array of numbers from farenheit to celcius
function toCelcius(array){
    const calculation = array.map(
        // iterate over each element and apply the farenheit to celcius function
        x => ((x - 32)/1.8)
    )
    return calculation;
}