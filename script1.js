/* Question 2 : Use the rest countries API URL ->https://restcountries.com/v3.1/all 
and display all the country flags in the console */

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var output= JSON.parse(request.response);
    for(var i=0;i<output.length;i++){
            console.log(output[i]["flags"].png);
            console.log(output[i]["flags"].svg);
        }
}