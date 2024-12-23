let cartaAnuencia = document.querySelector("#fileCA");
let instrumentoProtesto = document.querySelector("#fileIP");
let oficio = document.querySelector("#fileOF");
let radios = document.querySelectorAll('input[type="radio"]');
let container_off = document.querySelector(".container_off");
let btnHamburguer = document.getElementById("btn_hamburguer");

//#region input Files Anexos
radios.forEach((radio) => {
    radio.addEventListener("click", () => {
        if (radio.id === "inputRadioCA") {
            cartaAnuencia.style.display = "block";
            instrumentoProtesto.style.display = "none";
            oficio.style.display = "none";
        } else if (radio.id === "inputRadioIP") {
            cartaAnuencia.style.display = "none";
            instrumentoProtesto.style.display = "block";
            oficio.style.display = "none";
        } else if (radio.id === "inputRadioOF") {
            cartaAnuencia.style.display = "none";
            instrumentoProtesto.style.display = "none";
            oficio.style.display = "block";
        }
    });
});
//#endregion

btnHamburguer.addEventListener("click", () => {
    container_off.style.display = "block";
});