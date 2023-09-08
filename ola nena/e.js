const $DOMlinkSong = document.querySelector(".io");
$DOMlinkSong.setAttribute("href", "https://youtu.be/M0YKOq_lWSQ")
$DOMlinkSong.setAttribute("target", "_blank");
$DOMlinkSong.setAttribute("rel", "noopener");

console.log($DOMlinkSong.getAttribute("data-song"));
console.log($DOMlinkSong.hasAttribute("data-song"));

document.write("<h1> Hola Mundo, desde DOM </h1>");
document.write("<br> <hr> <br>");

const hobbies = [
"Aprender idiomas",
"Leer sobre autocontrol",
"Leer novelas",
"Leer sobre nuevas tecnologias y cosas sobre ellas",
"Hacer mi curso de desarrollo web",
"Videoclases de JavaScript",
"Curso de transicion a media superior",
"Videoclases", 
"Web",
"Ejercicio",
"Ducha"
],
$fragment = document.createDocumentFragment(),
$ul = document.createElement("ul");

hobbies.forEach(el => {
const $li = document.createElement("li");
$li.textContent = el;
$ul.appendChild($li);
});


$ul.classList.toggle("color-white");
$fragment.appendChild($ul);
document.body.appendChild($fragment);

