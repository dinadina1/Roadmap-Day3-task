/* Question 1: How to compare two JSON have the same properties without order */

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

if(JSON.stringify(obj1)==JSON.stringify(obj2)){
    console.log("It's Same");
}else{
    console.log("It's not Same");
}



