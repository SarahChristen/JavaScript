for (var i = 0; i < 4; i++) {
    let bild = document.getElementById("ball" + (i + 1));
    bild.addEventListener("click", ballClicked);
}

var count = 0;

function ballClicked(eventObj) {

    var bild = eventObj.target;

    if (bild.src.indexOf("ball.png") > -1) {
        bild.src = "kreuz.png";
    } else {
        bild.style.visibility = "hidden";
        count++;
        if (count === 4) {
            var p = document.createElement("p");
            p.innerHTML = "<strong>GAME OVER</strong>";
            p.setAttribute("style", "color:red;");
            document.getElementById("task").appendChild(p);
        }
    }
}
