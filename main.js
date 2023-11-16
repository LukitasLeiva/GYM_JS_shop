let opcion = 0
let preciosuplemento = 0
opcion = prompt("ingrese plan a seleccionar: \n1. plan alimenticio\n2. rutina de entrenamiento\n3. suplementos")

if (opcion==1) {
    let planalimenticio = prompt("ingrese su plan ideal\n")
}
if (opcion==2) {
    // tambien vamos a hacer un tipo ticket
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
