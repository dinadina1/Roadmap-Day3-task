// /* Question 1: How to compare two JSON have the same properties without order */

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log("The JSON objects are equal.");
}else{
    console.log("The JSON objects are not equal.");
}

