let opcion = 0
let preciosuplemento = 0


function consulta(){
    opcion = prompt("ingrese plan a seleccionar: \n1. plan alimenticio\n2. rutina de entrenamiento\n3. suplementos")
    if (opcion==1) {
        const usuarios = [
            datos = {
                nombre: prompt("ingrese su nombre"),
                altura: prompt("ingrese la altura"),
                peso: prompt("ingrese su peso")
            },
        ];
        alert(datos.nombre)
        alert(datos.altura)
        alert(datos.peso)
        let pesos = [];
        for(let i=0;i<3;i+=1){
            alert("ingrese su peso en los ultimos 3 meses")
            peso = prompt("ingrese el peso")
            pesos[i] = peso 
        }
        alert(pesos[0])
        alert(pesos[1])
        alert(pesos[2])
        
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
}



