// 1.How to compare two JSON have the same properties without order?

let obj1 = { name: "Person 1", age:5 };
let obj2 = { age:5, name: "Person 1" };

let compare=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            compare=false;
            break;
        }
    }
}
else {
    compare=false;
};
console.log("is object equal "+compare);

//  2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console


let request = new XMLHttpRequest();
 
request.open("GET","https://restcountries.eu/rest/v2/all",true); // this url is not working.
request.send();
request.onload=function(){
    let output=JSON.parse(request.response)
    for(let i=0;i<output.length;i++){
        console.log(output[i].countryflags);
    }
    
}

// 3.Use the same rest countries and print all countries name, region, sub region and population

let re = new XMLHttpRequest();
 
re.open("GET","https://restcountries.eu/rest/v2/all",true); // this url is not working.
re.send();
re.onload=function(){
    let data=JSON.parse(re.response)
    for(let i=0;i<data.length;i++){
        console.log(data[i].country);
        console.log(data[i].region);
        console.log(data[i].subregion);        //.country  or  .region  or  .sub region or  .population
        console.log(data[i].population);
    }
    
}