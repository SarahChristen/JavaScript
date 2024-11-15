window.onload = function () {
    document.getElementById("background").addEventListener("input", changeBackground);
    document.getElementById("text").addEventListener("input", changeText);
    document.getElementById("size").addEventListener("input", changeSize);
}

function changeBackground() {
    document.body.style.backgroundColor = document.getElementById("background").value;
}

function changeText() {
    document.body.style.color = document.getElementById("text").value;
}

function changeSize() {
    var fontSize = document.getElementById("size").value;
    document.body.style.fontSize = fontSize + "px";
}
    