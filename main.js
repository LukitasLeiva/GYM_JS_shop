const cambiarTema = document.querySelector(".cambiarModo");
const body = document.body;
const footer = document.all[32];
const header = document.all[7];
console.log(document.all)
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
    } else {
        activarModoOscuro();
    }
})

{if (body.classList.contains("modoOscuro")) {
    cambiarTema.innerText = "cambiar a modo claro";
} else {
    cambiarTema.innerText = "cambiar a modo oscuro";
}}

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
    if (opcion==3) {
        let tipodesuplemento = prompt("ingrese que suplemento va a necesitar(creatina, proteína o preentreno):")
        tipodesuplemento = tipodesuplemento.toLowerCase()
        switch(tipodesuplemento){
            case "creatina":
                preciosuplemento = "el valor de la creatina $15000"
                alert(preciosuplemento)
                break;
            case "proteina","proteína":
                preciosuplemento = "el valor de la proteina $10000"
                alert(preciosuplemento)
                break;
            case "preentreno":
                preciosuplemento = "el valor del preentreno $15000"
                alert(preciosuplemento)
                break;
            default:
                alert("no hay stock")
        }
    }
}



