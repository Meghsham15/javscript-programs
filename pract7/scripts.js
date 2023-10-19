function insertObjToArray(arr,obj){
    arr.push(obj);
    return arr;
}


let obj = {name:"Meghsham",roll:4215,year:"BE"};

let arrayBefore = ['mj','insane',4215];
let array = ['mj','insane',4215];

// let output = insertObjToArray(array,obj);
// console.log(output);

let display = document.getElementById('display');
let objInput = document.getElementById('obj');
let insert = document.getElementById('insert');

insert.addEventListener('click',(e)=>{
    // console.log(objInput.value);
    let objinp = objInput.value;
    let output = insertObjToArray(array,objinp);
    display.innerText = `array is - ${JSON.stringify(arrayBefore)} array after inserting user obj - ${JSON.stringify(output)}`;
    // display.innerText = `hi`;
});