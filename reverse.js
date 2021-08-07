
/*------------------------- 
 that is right word 
 --------------------------*/

const greeting = 'Hello, How are you?'

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = reverse + letter;
    }
    return reverse;
}

const reversed = reverseString(greeting);
console.log(reversed);



/*------------------------------
 that is reverse word
------------------------------ */


const greeting = 'Hello, How are you?'

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greeting);
console.log(reversed);