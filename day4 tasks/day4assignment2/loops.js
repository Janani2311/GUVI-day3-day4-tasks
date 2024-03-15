let data = {
    "resume": [
        {
            "name" : "janani",
            "mail" : "janaeswar@gmail.com",
            "mobile" : 9458622366,
            "city" : "Erode",
            "degree" : "B.E"
        },
        {
            "name" : "vinodh",
            "mail" : "vinodh4@gmail.com",
            "mobile" : 9842977908,
            "city" : "coimbatore",
            "degree" : "B.E"
        }
    ]
    
}

//for loop
for(let i=0; i < data.resume.length; i++){
    let obj = data.resume[i];
    console.log(obj.name);
    console.log(obj.mail);
    console.log(obj.mobile);
    console.log(obj.city);
    console.log(obj.degree);
}

//forEach loop
data.resume.forEach((obj) =>{
    console.log(obj.name);
    console.log(obj.mail);
    console.log(obj.mobile);
    console.log(obj.city);
    console.log(obj.degree);
});

//for In loop
for(let key in data.resume){
    if(data.resume.hasOwnProperty(key)){
       let obj = data.resume;
        console.log(obj[key].name);
        console.log(obj[key].mail);
        console.log(obj[key].mobile);
        console.log(obj[key].city);
        console.log(obj[key].degree);
    }
}

//for of loop
for(let x of data.resume){
       console.log(x.name);
       console.log(x.mail);
       console.log(x.mobile);
       console.log(x.city);
       console.log(x.degree);
    

}