var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");

function pickColor() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}    
window.onload = function(){
    pickColor();
}

color1.addEventListener("input", pickColor);

color2.addEventListener("input", pickColor);




