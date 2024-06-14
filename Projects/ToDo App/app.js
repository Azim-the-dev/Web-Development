const input = document.getElementById("input-box");
const ul = document.getElementById("list-container");
const button = document.getElementById("button")

function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}

function loadData() {
    ul.innerHTML = localStorage.getItem("data");
}

loadData();

button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        input.value = "";
        input.placeholder = "Please enter a task";
        input.classList.add("error");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value.trim();
        ul.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        input.value = "";
        saveData();
    }
});

ul.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.style.display = "none";
        saveData();
    }
}, false);