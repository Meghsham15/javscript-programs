
class compareStr {

    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    toUpperCase() {
        if (this.str1.toUpperCase() === this.str2.toUpperCase()) {
            console.log("strings are similar");
            return "toupperCase - strings are similar";
        }
        console.log("string are not similar");
        return "toupperCase -  string are not similar";
    }

    regEx() {
        // const pattern = new RegExp(this.str1, "gi");
        // compare the stings
        const result = this.str1.match(this.str2)
        if (result) {
            console.log('The strings are similar.');
            return "regex - strings are similar";
        } else {
            console.log('The strings are not similar.');
            return "regex - string are not similar";
        }
    }

    localCompare() {
        const result = this.str1.localeCompare(this.str2, undefined, { sensitivity: 'base' });
        if (result == 0) {
            console.log('The strings are similar.');
            return "localcompare - strings are similar";
        } else {
            console.log('The strings are not similar.');
            return "localcompare - string are not similar";
        }
    }
}

// let obj1 = new compareStr("insane","insane");
// obj1.regEx();


let check = document.getElementById('check');
let display = document.getElementById('display');
let str1 = document.getElementById('str1')
let method = document.getElementById('method')
let str2 = document.getElementById('str2');

check.addEventListener('click',(e)=>{
    let string1 = str1.value;
    let string2 = str2.value;
    let mth = method.value;
    let obj1 = new compareStr(string1,string2);
    let output ;


    switch(mth){
        case 'regex':
            output = obj1.regEx();
            display.innerText = output;
            break;
        case 'uppercase':
            output = obj1.toUpperCase();
            display.innerText = output;
            break;
        case 'local':
            output = obj1.localCompare();
            display.innerText = output;
            break;
        default :
            console.log('invalid input');
    }
});



