document.write("Hallo Welt");

var meldung = "Hallo Konsole!";
console.log(meldung);

var n1 = "3a";
var n2 = "3";
if (n1 != 3) {
        n1 = Number.NaN;
}
if (n2 != 3) {
        n2 = Number.NaN;
}
alert(n1);   //?
alert(n2);   //?

var monate = ["Januar", "März", "April", "Mai", 
        "JavaScript", "JS", "Juni", "Juli", "August", "September"];

//Fehlenden Februar an Position 1 einfügen
//dann die fehlerhaften Einträge an Position 5 und 6 entfernen 
//und die fehlenden Monate anhängen 
monate.splice(1, 0, "Februar");
monate.splice(5, 2);
monate.push("Oktober", "November", "Dezember");
console.log(monate);




/*var btn = document.getElementById("myButton");
        btn.addEventListener("click", anzeigen);

        function anzeigen() {
           alert("Button wurde geklickt.");
        }
alert("Hello World!")*/
//documnet.write("<h1>Hello World!</h1>") -> funktioniert irgendwie nicht