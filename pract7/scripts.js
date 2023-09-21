function insertObjToArray(arr,obj){
    arr.push(obj);
    return arr;
}


let obj = {name:"Meghsham",roll:4215,year:"BE"};

let array = ['mj','insane',4215];

let output = insertObjToArray(array,obj);
console.log(output);