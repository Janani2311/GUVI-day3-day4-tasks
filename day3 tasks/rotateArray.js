//8.Rotate an array by K times

//in Anonymous function
let arrR = [1, 2, 3, 4, 5, 6];
let k = 3;
let i = 1;

var rotation = function() {
    
    let ele = arrR.pop();
    arrR.unshift(ele);
    return arrR;
};
while(i <= k) {
var rotatedArray = rotation();
i++
}
console.log(rotatedArray);

//in IIFE function
let arrString = ['a','b','c','d','e','f'];

((arr) => {
    let i = 1;
    while(i <= k) {
    let ele = arr.pop();
    arr.unshift(ele);
    i++
    }
    console.log(arr);
})(arrString);
