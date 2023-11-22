/* Question 3 : Use the rest countries API URL ->https://restcountries.com/v3.1/all 
and display all the countries name, regions, sub-region ,population in the console */

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var output = JSON.parse(req.response)
    for(var i=0;i<output.length;i++)
    {
        console.log(i+1 +") Country Name : "+output[i]["name"].common);
        console.log("Region : "+output[i]["region"]);
        console.log("sub-region : "+output[i]["subregion"]);
        console.log("Population : "+output[i]["population"]);
     }  
}

