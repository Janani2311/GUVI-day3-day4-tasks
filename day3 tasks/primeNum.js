//4. Return prime numbers in an array

let numbers = [2, 7, 47, 36, 13, 89, 23, 93, 63, 82, 18, 29];
 
//function to check for prime numbers
var CheckPrime = function(check){
let flag = 0;
let endCondition = Math.sqrt(check);
    if(check != 0 || check != 1){
        for(let i = 2; i <= Math.ceil(endCondition); i++){
            if(check % i == 0) {   
                flag = 0;  
                return flag;
             } else {
                flag = 1;
             }
             
        }
    }
    return flag;
};

// return prime numbers array In anonymous function

var prime = function(num){
    let result = [];
    for(let i = 0; i < num.length; i++){
        let primeNum = CheckPrime(num[i]);
        if(primeNum == 1){
            result.push(num[i]);
        }
    }
    return result;
};
console.log(prime(numbers));   

// return prime numbers array In IIFE

(function(num){
    let result = [];
    for(let i = 0; i < num.length; i++){
        let primeNum = CheckPrime(num[i]);
        if(primeNum == 1){
            result.push(num[i]);
        }
    }
    console.log(result);
})(numbers);

// return prime numbers array In Arrow function

var arrowPrime = (num) => {
    let result = [];
    for(let i = 0; i < num.length; i++){
        let primeNum = CheckPrime(num[i]);
        if(primeNum == 1){
            result.push(num[i]);
        }
    }
    return result;
};

console.log(arrowPrime(numbers));