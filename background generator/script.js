let css = document.querySelector("h3");

let color1 = document.querySelector(".color1");

let color2 = document.querySelector(".color2");

let body = document.getElementById("gradient");

let gi = document.getElementById("gi")



function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";


    css.textContent = body.style.background + ";";
}


color1.addEventListener("input",function () {
    // console.log(color1.value);
    setGradient();

})

color2.addEventListener("input",setGradient);

