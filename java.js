// alert("Bienvenido")
// let cliente = prompt("Ingrese su nombre completo")
// prestamo()

// function prestamo(veraz, proCr, plazo) {

//     proCr = parseInt(prompt("Ingrese la cantidad de dinero"))
//     let estimate = 0

//     do {
//         alert(`Ingrese correctamente los siguientes datos`)
//         veraz = parseInt(prompt("Situacion de veraz"))
//         plazo = parseInt(prompt("Plazo de pago (max. 36 cuotas)"))
//     } while (veraz >= 5 || plazo >= 36) {
//         alert(`Su informacion se está procesando, aguarde por favor...`)
//     }

//     switch (veraz) {
//         case 1:
//             estimate = proCr + (proCr * 0.14)
//             break
//         case 2:
//             estimate = proCr + (proCr * 0.18)
//             break
//         case 3:
//             estimate = proCr + (proCr * 0.22)
//             break
//         case 4:
//             estimate = proCr + (proCr * 0.25)
//             break
//         case 5:
//             estimate = proCr + (proCr * 0.33)
//             break
//         default:
//             break
//     }

//     if (plazo <= 6) {
//         estimate = (estimate + (estimate * 0.10)) / plazo
//     } else if (plazo > 6 && plazo <= 12) {
//         estimate = (estimate + (estimate * 0.15)) / plazo
//     } else if (plazo > 12 && plazo <= 24) {
//         estimate = (estimate + (estimate * 0.20)) / plazo
//     } else if (plazo > 24 && plazo <= 36) {
//         estimate = (estimate + (estimate * 0.25)) / plazo
//     } else if (plazo > 36) {

//     }



//     console.log(`Señor/a: ${cliente} Préstamo: ${proCr} Veraz: ${veraz} Financiado en ${plazo} cuotas de ${estimate}`)
//     alert(`Puede financiar su préstamo de ${proCr} en ${plazo} cuotas de ${estimate}`)
//     document.write(`Gracias señor/a: ${cliente} por comunicarse con Yeia Bank, su préstamo de ${proCr} puede ser financiando en ${plazo} cuotas de ${estimate}`)

// }

alert("Bienvenido")
alert("Por favor, ingrese correctamente los siguientes datos")
class Clientes{
    constructor(nombre, apellido, dni){
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni
    }
}

class Prestamo{
    constructor(monto, plazo, veraz){
        this.monto = monto,
        this.plazo = plazo,
        this.veraz = veraz
    }
}

let cliente1 = new Clientes (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), parseInt(prompt("Ingrese su edad")))
// let cliente2 = new Clientes (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad"))
// let cliente3 = new Clientes (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad"))
// let cliente4 = new Clientes (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad"))



const registroDiario = []


class Promociones{

}
