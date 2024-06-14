let str = "AZIM";
let name = str.split('');
let index = -1;
let n = '';

function print(i) {
    n += name[i];
    console.log(n);
}

const stop = setInterval(() => {
    index = index + 1;
    if (index == name.length) {
        clearInterval(stop);
    } else {
        print(index);
    }
}, 100);