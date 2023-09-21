let buttons = document.querySelectorAll("button");
let input = document.getElementById('result');

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];



    button.addEventListener('click', function (e) {
        if (button.innerText === 'C') {
            input.value = '';
            return;
        }
        if (button.innerText === 'Del') {
            let currentVal = input.value;
            currentVal = currentVal.slice(0, -1);
            input.value = currentVal;
            return;
        }
        if (button.innerText === '=') {
            let currentVal = input.value;
            let output = eval(currentVal).toString();
            input.value = output
            return;
        }
        let currentVal = input.value;
        input.value = currentVal + button.innerText;

    });

}