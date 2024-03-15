//5. Return all palindrome numbers in an array

let palinArr = [45, 88, 32, 65, 111, 1221, 5, 47, 212];

function checkpalindrome(x){
    let numStr = x.toString();
    let y = '';
    if(numStr.length == 1){
        return 1;
    } else {
     let element = numStr.split('');
        for(let i = element.length-1 ; i >= 0; i--){
             y += element[i];
        }
        if(y == numStr)
            return 1;
        else
            return 0;
    }
    
}

// in anonymous function
var palindrome = function(num){
    var result =[];
    for(let i = 0; i < num.length; i++){
        let check = checkpalindrome(num[i]);
        if(check == 1)
        result.push(num[i]);
    }
    return result;
};
console.log(palindrome(palinArr));

// in IIFE function
((num) => {
    var result =[];
    for(let i = 0; i < num.length; i++){
        let check = checkpalindrome(num[i]);
        if(check == 1)
        result.push(num[i]);
    }
    console.log(result);
})(palinArr);

//in arrow function
var arrowPalindrome = (num) =>{
    var result =[];
    for(let i = 0; i < num.length; i++){
        let check = checkpalindrome(num[i]);
        if(check == 1)
        result.push(num[i]);
    }
    return result;
}
console.log(arrowPalindrome(palinArr));