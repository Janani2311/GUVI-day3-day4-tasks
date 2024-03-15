//7.Remove duplicates from an array
//In anonymous function
let mixedElements = [5, 4, 8, 2, 4, 6, 5, 10, 2];

let removeDuplicates = function(arr){
    let filteredArray = [];
    arr.forEach(element => {
        if(!filteredArray.includes(element)){
            filteredArray.push(element);
        }
    });
    return filteredArray;
};

console.log(removeDuplicates(mixedElements));

//In IiFE function
let mixedStrings = ["mango", "banana", "papaya", "mango", "plum", "banana"];

((arr) => {
    let filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(!filteredArray.includes(arr[i])){
            filteredArray.push(arr[i]);
        }
    }
    console.log(filteredArray);
})(mixedStrings);
