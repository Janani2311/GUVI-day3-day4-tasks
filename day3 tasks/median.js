// Return median of two sorted arrays
let arr1 = [1, 5, 7, 12, 9];
let arr2 = [2, 8, 17, 15, 6];
let arr3 = [...arr1, ...arr2];
arr3.sort((a,b) =>  a - b );

//In anonymous function
let median = function(arr) {
    let index = 0;
    if(arr.length % 2 == 0) {
        index = arr.length/2 - 1;
        return arr3[index];
     } 
};
console.log(median(arr3));

//In IIFE function
((arr) => {
    let index = 0;
    if(arr.length % 2 == 0) {
        index = arr.length/2 - 1;
        console.log(arr3[index]);
     } 
})(arr3);
