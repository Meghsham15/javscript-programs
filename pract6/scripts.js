class ArrayOperations {

    constructor(arr) {
        this.arr = arr;
    }

    stringToArr(){
        let arr =[];
        if(typeof this.arr ==='string'){
            arr = this.arr.split(',');
        }
        this.arr = arr;
        return this.arr;
    }

    checkElement(ele) {
        for(let i = 0;i<this.arr.length;i++){
            if(this.arr[i] ===ele){
                // console.log("checked ele true");
                return [`The element ${ele} is present in the array`,i];
            }
        }
        return [`The element ${ele} is not present in the array`,false];
        // if (this.arr.includes(ele)) {
        //     console.log(`The element ${ele} is present in the array`);
        //     return `The element ${ele} is present in the array`;
        // } else {
        //     console.log(`The element ${ele} is not present in the array`);
        //     return `The element ${ele} is not present in the array`;
        // }
    }

    removeElement(ele) {
        let index = this.checkElement(ele)[1];
        // console.log(index+"ele is "+this.arr[index]);
        if (index || index ===0) {
           
            this.arr.splice(index,1);
            return `${ele} this element removed - ` + JSON.stringify(this.arr);
        }
        return `${ele} this element not present in the array`
    }

    emptyArray() {
        this.arr = [];
        console.log("array emptied");
        return ' array emptied - '+ JSON.stringify(this.arr);
    }

}



function display(operation) {
    console.log(operation);
    let display = document.getElementById("display")
    switch (operation) {
        case "empty":
            display.innerHTML = `<input id="array" type="text" placeholder='Enter the array using commas not brackets'> <button onclick="runOperation()">Run</button>`;
            break;

        case "check":
            display.innerHTML = `<input id="array" type="text" placeholder='Enter the array using commas not brackets'>
            <input id="element" type="text" placeholder='enter the element'> <button onclick="runOperation()">Run</button>`;
            break;

        case "remove":
            display.innerHTML = `<input id="array" type="text" placeholder='Enter the array using commas not brackets'>
                <input id="element" type="text" placeholder='enter the element to remove'> <button onclick="runOperation()">Run</button>`;
            break;
    }
}


function runOperation() {
    let op = document.getElementById('operations').value;
    let array = document.getElementById('array').value;
    let output = document.getElementById('output');
    let obj = new ArrayOperations(array);
    array = obj.stringToArr();
    

    switch (op) {
        case "empty":
            let val = obj.emptyArray(array);
            output.innerText = val;
            break;

        case "check":
            let element = document.getElementById('element').value;
            let value = obj.checkElement(element);
            output.innerText = value;
            break;

        case "remove":
            let ele = document.getElementById('element').value;
            // ele = ['mj', 4215];
            // console.log(ele);
            let vl = obj.removeElement(ele);
            output.innerText = vl;
            break;

    }

}