// 1. Print odd numbers in anonymous function
let oddx = [12, 10, 5, 89, 77, 11, 14, 19, 93, 107];

let odd = function (x) {
 let oddNum = [];
 for(var i=0; i<x.length; i++){
    if(x[i] % 2 != 0)
        oddNum.push(x[i]);
 }
 return oddNum;
};

console.log(odd(oddx));

// in arrrow function

let arrowOdd = (x) => {
    let oddNum = [];
    for(var i=0; i<x.length; i++){
        if(x[i] % 2 != 0)
         oddNum.push(x[i]);
     }
 return oddNum;
};

console.log(arrowOdd(oddx));

//in IIFE function

((x) => {
    let oddNum = [];
    for(var i=0; i<x.length; i++){
        if(x[i] % 2 != 0)
         oddNum.push(x[i]);
     }
 console.log(oddNum);
})(oddx);