const button = document.createElement("button");
button.innerHTML = "button";
document.querySelector("body").appendChild(button);

button.addEventListener("click", (e) => {
  console.log(e.target);
});
