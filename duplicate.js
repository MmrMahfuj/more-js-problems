// const names = ['babul', 'kabul', 'sabul', 'tabul', 'nabul', 'kobul', 'kabul', 'nabul', 'gabul', 'sabul', 'abul'];

// function removeDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const element = names[i];
//         console.log(element);
//     }
// }


// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



/* 
           ----------------- for loop er advence varsion-------------
 */


const names = ['babul', 'kabul', 'sabul', 'tabul', 'nabul', 'kobul', 'kabul', 'nabul', 'gabul', 'sabul', 'abul'];

function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}


const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);


/* ----------------------------------------
        array of numbers duplicate dekhbo 
 --------------------------------------------*/

const numArray = [14, 52, 63, 85, 74, 12, 41, 52, 63, 25, 96, 32, 14, 52, 78, 96, 85];

function removeDuplicateNumber(numbers) {
    const uniqueNum = [];
    for (const element of numbers) {
        console.log(element);
        if (uniqueNum.indexOf(element) == -1) {
            uniqueNum.push(element);
        }
    }
    return uniqueNum;
}



const uniqueNumbers = removeDuplicateNumber(numArray);
console.log(uniqueNumbers);































