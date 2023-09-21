
class compareStr {

    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    toUpperCase() {
        if (this.str1.toUpperCase() === this.str2.toUpperCase()) {
            console.log("strings are similar");
            return "strings are similar";
        }
        console.log("string are not similar");
        return "string are not similar";
    }

    regEx() {
        // const pattern = new RegExp(this.str1, "gi");
        // compare the stings
        const result = this.str1.match(this.str2)
        if (result) {
            console.log('The strings are similar.');
        } else {
            console.log('The strings are not similar.');
        }
    }

    localCompare() {
        const result = this.str1.localeCompare(this.str2, undefined, { sensitivity: 'base' });
        if (result == 0) {
            console.log('The strings are similar.');
        } else {
            console.log('The strings are not similar.');
        }
    }
}

let obj1 = new compareStr("insane","insane3");
obj1.regEx();




