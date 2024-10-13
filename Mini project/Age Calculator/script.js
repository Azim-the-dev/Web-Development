const birthDate = document.getElementById("input-date");
const button = document.getElementById("button");
const result = document.getElementById("result");
const today = new Date().toISOString().slice(0, 10);

function calculate() {
    if (birthDate.value === "") {
        result.innerHTML = "Please select a date";
        return;
    } else if (birthDate.value === today) {
        result.innerHTML = "You were born today!";
        return;
    } else if (birthDate.value > today) {
        result.innerHTML = "You are not born yet!";
        return;
    } else {
        result.innerHTML = age();
    }
}

function age() {
    const birth = new Date(birthDate.value);
    const diff = new Date(today) - birth;
    const years = Math.floor(diff / 31536000000);
    const months = Math.floor((diff % 31536000000) / 2592000000);
    const days = Math.floor(((diff % 31536000000) % 2592000000) / 86400000);

    if (years > 100) {
        return "You are dead!";
    } else if (years === 0) {
        return `You are ${months} months, and ${days} days old`;
    } else {
        return `You are ${years} years, ${months} months, and ${days} days old`;
    }
}

button.addEventListener("click", function () {
    calculate();
});

birthDate.addEventListener('input', () => {
    if (birthDate.value !== "") {
        calculate();
    }
});