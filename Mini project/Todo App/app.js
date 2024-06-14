let form = document.querySelector('#form');
let input = document.querySelector('#input');
let ul = document.querySelector('#ul');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if(input.value != "") {
        addTaskF(input.value);
    } else {
        console.log("Enter Some Text");
    }
    input.value = "";
});

function addTaskF(task) {
    let item = document.createElement('li');

    item.innerHTML = `${task} <button class="dltbtm">Delete</button>`;
    ul.appendChild(item);
}

ul.addEventListener('click', function (event) {
    if(event.target.nodeName == 'BUTTON'){
        let dlItem = event.target.parentElement;
        dlItem.remove();
    };
});