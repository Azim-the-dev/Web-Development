const div = document.createElement("div");
const speed = document.getElementById("speed-value");
const speedUnits = document.getElementById("speed-units");
const msg = document.getElementById("your-speed-message");

speed.style.position = "relative";
speed.style.visibility = "hidden";
div.setAttribute("class", "speed-results-container");
div.setAttribute("class", "visible");
div.style.position = "absolute";
div.style.top = "0px";
div.style.right = "0px";
div.style.visibility = "visible";
div.style.zIndex = "99";
div.innerHTML = "0";

function KbpsToKBps(kbps) {
    let result = (kbps / 8).toFixed(1);

    if (result.length <= 3) {
        return result;
    } else {
        return (parseFloat(result)).toFixed(0);
    }
}

function MbpsToMBps(mbps) {
    let result = (mbps / 8).toFixed(1);

    if (result.length <= 3) {
        return result;
    } else {
        return (parseFloat(result)).toFixed(0);
    }
}

function GbpsToGBps(gbps) {
    let result = (gbps / 8).toFixed(1);

    if (result.length <= 3) {
        return result;
    } else {
        return (parseFloat(result)).toFixed(0);
    }
}

const stopp = setInterval(() => {
    if (speedUnits.innerText === "Kbps") {
        speedUnits.innerText = "KBps";
        div.innerHTML = KbpsToKBps(parseFloat(speed.firstChild.nodeValue));
        console.log(speed.firstChild.nodeValue + "Kbps", ">>", div.innerHTML + "KBps");
    } else if (speedUnits.innerText === "Mbps") {
        speedUnits.innerText = "MBps";
        div.innerHTML = MbpsToMBps(parseFloat(speed.firstChild.nodeValue));
        console.log(speed.firstChild.nodeValue + "Mbps", ">>", div.innerHTML + "MBps");
    } else if (speedUnits.innerText === "Gbps") {
        speedUnits.innerText = "GBps";
        div.innerHTML = GbpsToGBps(parseFloat(speed.firstChild.nodeValue));
        console.log(speed.firstChild.nodeValue + "Gbps", ">>", div.innerHTML + "GBps");
    }

    speed.append(div);

    if (msg.innerText == "Your Internet speed is") {
        div.style.color = "#221f1f";
        speedUnits.style.color = "#221f1f";
        clearInterval(stopp);
    }
});

// Desable Button
const btn2 = document.getElementById("speed-progress-indicator");
const spinner = document.querySelector(".spinner");
btn2.setAttribute("id", "azim");
spinner.classList.replace("spinner", "azim");

btn2.addEventListener("click", () => {
    location.reload();
});

// Credit
let a = document.createElement("a");
a.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Extention By Azim";
a.style.textDecoration = "none";
a.style.color = "black";
a.setAttribute("href", "https://github.com/Azim-me");
document.getElementById("privacy-link").append(a);
let style = document.createElement("style");
style.innerHTML = `.no-hover:hover { color: black; }`;
document.head.append(style);
let privacy = document.getElementById("privacy-link");
privacy.classList.add("no-hover");