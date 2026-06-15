
// Ejercicio 1
let cuentaA = 5
let cuentaB = 10

cuentaA += cuentaB;

cuentaB = cuentaA - cuentaB

cuentaA -= cuentaB


// Ejercicio 2
let nivel = Number(prompt("Ingrese su nivel: "))
let honor = Number(prompt("Indique sus puntos de honors:"))
let vip = prompt("tiene pase vip? (S/N)").toLowerCase()

if(nivel >= 20)
   if(vip === 's' || honor === 100) {
    console.log("Acceso concedido")
} else {
    console.log("No cumple con los requisitos")
}

// Ejercicio 3

let vida = Number(prompt("Ingresa la vida del jugador"))
let monstruo = Number(prompt("Ingresa el ataque del monstruo"))

vida -= monstruo 
if (vida < 10) {
    console.log("Peligro critico")
} else if (vida >= 10) {
    console.log("Sobreviviste")
}