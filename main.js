//boton de cambiar de modo
const cambiarTema = document.querySelector(".cambiarModo");
const body = document.body;
const footer = document.querySelector("footer");
const header = document.querySelector("header");
let modoOscuro = localStorage.getItem("modoOscuro");

function activarModoOscuro(){
    body.classList.add("modoOscuro");
    footer.classList.add("modoOscuro");
    header.classList.add("modoOscuro");
    localStorage.setItem("modoOscuro", "activado");
}

function desactivarModoOscuro(){
    body.classList.remove("modoOscuro");
    footer.classList.remove("modoOscuro");
    header.classList.remove("modoOscuro");
    localStorage.setItem("modoOscuro", "desactivado");
}

if (modoOscuro === "activado") {
    activarModoOscuro();
} else {
    desactivarModoOscuro();
}

cambiarTema.addEventListener("click", () => {
    modoOscuro = localStorage.getItem("modoOscuro");
    if (modoOscuro === "activado") {
        desactivarModoOscuro();
        cambiarTema.innerText = "cambiar a modo oscuro";
    } else {
        activarModoOscuro();
        cambiarTema.innerText = "cambiar a modo claro";
    }
})

//lista de suplementos(se muere un gatito)
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#suplementos-input");
const agregar = document.querySelector("#agregar");
let costoTotal = 0;


agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (agregarInput.value != ""||"fin") {
        if(agregarInput.value == "creatina"){
            costoTotal += 15000;
            costo = 15000;
            let item = document.createElement("li");
            item.innerText = agregarInput.value + " con un valor de " + costo;
            agregar.append(item);
        }if(agregarInput.value == "proteina"){
            costoTotal += 13000;
            costo = 13000;
            let item = document.createElement("li");
            item.innerText = agregarInput.value + " con un valor de " + costo;
            agregar.append(item);
        }if(agregarInput.value == "preentreno"){
            costoTotal += 11000;
            costo = 11000;
            let item = document.createElement("li");
            item.innerText = agregarInput.value + " con un valor de " + costo;
            agregar.append(item);
        }
    }if (agregarInput.value === ""){
        alert("input vacío");
    }if(agregarInput.value === "fin"){
        agregar.append(" el precio total es: " + costoTotal);
    }
    agregarInput.focus;
    agregarForm.reset;
})

let opcion = 0
let preciosuplemento = 0

function pesosaludable(peso, altura){
    let imc = (peso/altura)**2
    let imcsaludable = " "
    let dieta = " "
    if (imc<18.5) {
        imcsaludable = "bajo de peso y es recomendable dieta de "
        dieta = "2500kcal haciendo ejercicio orientado a hipertrofia"
    } else if (imc>18.5 && imc<=24.9){
        imcsaludable = "saludable y es recomendable dieta de "
        dieta = "2000kcal haciendo ejercicio regular"
    } else if (imc>=25 && imc<29.9) {
        imcsaludable = "sobrepeso y es recomendable dieta de "
        dieta = "1750kcal haciendo cardio"
    } else {
        imcsaludable = "obesidad y es recomendable dieta de "
        dieta = "1500kcal haciendo caminatas"
    }
    return imcsaludable + dieta;
}

function consulta(){
    if (opcion==1) {
        
    }
    if (opcion==2) {
        altura = prompt("ingrese su altura")
        peso = prompt("ingrese su peso")
        alert(pesosaludable(altura, peso))
    }
}



