// 2. Convert all strings to title caps in string array
//in anonymous function
let titleStr = ["apple", "banana", "orange", "kiwi","grapes","plum"];

var titleCase= function(str){
    let titleCaseStr = [];
    for(let i = 0; i<str.length; i++){
       titleCaseStr.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }
    return titleCaseStr;
};

console.log(titleCase(titleStr));

//in arrow function, I used another logic without using JS methods

var arrowtitleCase = (str) => {
    let titleCaseStr = [];
    for(let i = 0; i < str.length; i++){
        let x = str[i];
        let y = '';
        y = x[0].toUpperCase();
      for(let j = 1; j < x.length; j++) {
         y += x[j]; 
      }
      titleCaseStr.push(y);
    }
    return titleCaseStr;
};

console.log(arrowtitleCase(titleStr));

//in IIFE function

((str) => {
    let titleCaseStr = [];
    for(let i = 0; i<str.length; i++){
       titleCaseStr.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }
    console.log(titleCaseStr);
})(titleStr);
