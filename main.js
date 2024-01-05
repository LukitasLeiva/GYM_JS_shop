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

window.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
        .then((respuesta) =>{
            return respuesta.json();
        })
        .then((data)=>{
            hacerProductos(data);
        })
        .catch((err) => {
            console.log(err);
        })
})
function hacerProductos(productos){
    const contenido = document.querySelector("#productos");
    let html = "";
    productos.forEach((producto)=>{
        html += `
        <p>${producto.name}: ${producto.price}</p>
        `;
    })
    contenido.innerHTML = html;
}

agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(agregarInput.value != ""||"fin") {
        if(agregarInput.value === "creatina" || "proteina" || "preentreno" || "proteína"){
            if(agregarInput.value == "creatina"){
                costoTotal += 15000;
                costo = 15000;
                let item = document.createElement("li");
                item.innerText = agregarInput.value + " con un valor de " + costo;
                agregar.append(item);
                pass;
            }if(agregarInput.value == "proteina"){
                costoTotal += 13000;
                costo = 13000;
                let item = document.createElement("li");
                item.innerText = agregarInput.value + " con un valor de " + costo;
                agregar.append(item);
                pass; 
            }if(agregarInput.value == "preentreno"){
                costoTotal += 11000;
                costo = 11000;
                let item = document.createElement("li");
                item.innerText = agregarInput.value + " con un valor de " + costo;
                agregar.append(item);
                pass;
            }
        }if(agregarInput.value != "creatina" || "proteina" || "preentreno" || "proteína"){
            if(agregarInput.value == "fin"){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Finalizado",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Ingreso incorrecto",
                });
            }
        }
    }if(agregarInput.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ingreso vacío",
        });
    }if(agregarInput.value === "fin"){
        agregar.append(" el precio total es: " + costoTotal);
        costoTotal = 0;
        pass;
    }
    agregarInput.focus;
    agregarForm.reset;
})

//seguimiento
const pesoIngresado = document.querySelector("#pesoSubmit");
const alturaIngresado = document.querySelector("#alturaSubmit");
const mensaje = document.querySelector("#seguimiento");
const botonMensaje = document.querySelector("#botonSeguimiento");
const botones = document.querySelector("#botones");

let peso = pesoIngresado.value;
let altura = alturaIngresado.value;
let imcsaludable = " ";
let dieta = " ";

botones.addEventListener("submit", (e) => {
    e.preventDefault();
})


function pesosaludable(peso, altura){
    let imc = (peso/altura)**2;
    if(imc<18.5) {
        imcsaludable = "bajo de peso y es recomendable dieta de "
        dieta = "2500kcal haciendo ejercicio orientado a hipertrofia"
    }if(imc>18.5 && imc<=24.9){
        imcsaludable = "saludable y es recomendable dieta de "
        dieta = "2000kcal haciendo ejercicio regular"
    }if(imc>=25 && imc<29.9) {
        imcsaludable = "sobrepeso y es recomendable dieta de "
        dieta = "1750kcal haciendo cardio"
    }else{
        imcsaludable = "obesidad y es recomendable dieta de "
        dieta = "1500kcal haciendo caminatas"
    }
    return imcsaludable + dieta;
}

botonMensaje.addEventListener("click", (e) => {
    e.preventDefault();
    mensaje.innerText = pesosaludable(peso, altura)
    console.log(peso, altura);
})

//rutina de ejercicios




