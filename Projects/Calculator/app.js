const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const p = document.querySelector("#result-txt");
let btnText = "";

function safeEval(str) {
    if (str.endsWith('+') || str.endsWith('-') || str.endsWith('*') || str.endsWith('/') || str.endsWith('%') || str.endsWith('=')) {
        str = str.slice(0, -1);
    }
    return eval(str);
}

function historyData(num, data) {
    const params = new URLSearchParams();
    params.append('num', num);
    params.append('data', data);

    fetch('https://script.google.com/macros/s/AKfycbzu6L8nvNhAIMAwSMQqzNqOGLTZFkxz35vGJRm03OyHsrQlMcfDeSZF_JnWZul1mnuPgg/exec', {
        method: 'POST',
        body: params
    }).then(response => {
        if (response.ok) {
            console.log('Data submitted successfully');
        } else {
            console.error('Error submitting data');
        }
    }).catch(error => {
        console.error('Error submitting data:', error);
    });
}


for (let btn of buttons) {
    btn.addEventListener("click", () => {
        if (btn.value === 'C') {
            btnText = "";
            input.value = '';
            input.placeholder = "Enter";
            p.textContent = "Result";
            input.style.display = "block";
            p.style.fontSize = "35px";
        } else if (btn.value === 'DEL') {
            if (input.value == '') {
                console.log("Do Nothing...");
            } else if (p.style.fontSize == '55px') {
                btnText = "";
                input.value = '';
                input.placeholder = "Enter";
                p.textContent = "Result";
                input.style.display = "block";
                p.style.fontSize = "35px";
            } else if (input.value.length == 1) {
                btnText = "";
                input.value = '';
                input.placeholder = "0";
                p.textContent = "Result";
            } else {
                let str = input.value;
                input.value = str.slice(0, -1);
                p.textContent = safeEval(str.slice(0, -1));
                btnText = str.slice(0, -1);
            }
        } else if (btn.value === '=') {
            if (p.innerHTML === '777') {
                window.location.href = "https://docs.google.com/spreadsheets/d/10PNXgN59uJkJSThnj9wZZL43J7KfMILaUzdogWPRtfs/edit#gid=0  "; // Ester egg...
            } else if (p.innerHTML === 'Result') {
                console.log("Do Nothing...");
            } else if (p.innerHTML === 'error') {
                console.log("Do Nothing...");
            } else {
                // History Seving...
                historyData(input.value, p.innerHTML);
                input.style.display = "none";
                p.style.fontSize = "55px";
            }
        } else if (btnText.endsWith('+') || btnText.endsWith('-') || btnText.endsWith('*') || btnText.endsWith('/') || btnText.endsWith('%') || btnText.endsWith('.')) {
            if (btn.value === '+' || btn.value === '-' || btn.value === '*' || btn.value === '/' || btn.value === '%' || btn.value === '.') {
                console.log("Do Nothing...");
            } else {
                btnText += btn.value;
                input.value = btnText;
                p.textContent = Math.round(safeEval(btnText) * 100) / 100;
            }
        } else if (p.style.fontSize == '55px') {
            btnText = "";
            input.value = '';
            input.placeholder = "Enter";
            p.textContent = "Result";
            input.style.display = "block";
            p.style.fontSize = "35px";

            btnText += btn.value;
            input.value = btnText;
            p.textContent = Math.round(safeEval(btnText) * 100) / 100;
        } else {
            try {
                if ((p.style.fontSize == '55px')) {
                    console.log("Do Nothing...");
                } else {
                    btnText += btn.value;
                    input.value = btnText;
                    p.textContent = Math.round(safeEval(btnText) * 100) / 100;
                }
            } catch (err) {
                console.log("ERROR >> ", err);
                p.innerHTML = "error";
            }
        }
    });
}

// Date: 12/05/2024
// version 1.0.0