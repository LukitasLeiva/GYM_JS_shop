const vueltas = prompt("ingrese vueltas a dar")
let signo = "positivo"
let numero = 0

for (let i=1; i<=vueltas; i+=1){
    console.log ("vuelta: ", i)
    let numero = parseInt(prompt("ingrese un numero"))
    if (numero>=0){
        signo="positivo"
    } else{
        signo="negativo"
    }
    console.log ("su numero es", numero, "y es", signo)
}