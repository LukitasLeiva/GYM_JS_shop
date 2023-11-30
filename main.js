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
    opcion = prompt("ingrese plan a seleccionar: \n1. seguimiento profesional\n2. plan alimenticio y rutina de entrenamiento\n3. suplementos")
    if (opcion==1) {
        let pesos = [];
        alert("ingrese su peso en los ultimos 6 meses")
        for(let i=0;i<6;i+=1){
            alert("ingrese el peso de hace " + (i+1)+ " mes/es")
            peso = prompt("ingrese el peso")
            pesos[i] = peso 
        }
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



