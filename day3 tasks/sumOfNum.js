//3. Sum of all numbers in an array
// in anonymous function
let sumX = [10, 3, 5, 6, 20, 8, 2];

let sum = function(x){
    let add = 0;
    for(let i=0; i < x.length; i++){
        add += x[i];
    }
    return add;
};
console.log(sum(sumX));

// in IIFE function
(function(x){
    let add = 0;
    for(let i=0; i < x.length; i++){
        add += x[i];
    }
    console.log(add);
})(sumX);

// in arrow function
let arrowsum = (x) => {
    let add = 0;
    for(let i=0; i < x.length; i++){
        add += x[i];
    }
    return add;
};
console.log(arrowsum(sumX));