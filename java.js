alert("Bienvenido")
alert("Por favor, ingrese correctamente los siguientes datos")
const registroDiario = []
class Clientes {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.dni = dni
    }
}

class Prestamo {
    constructor(monto, plazo, veraz) {
        this.monto = monto,
            this.plazo = plazo,
            this.veraz = veraz
    }
}

let cliente1 = new Clientes(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), parseInt(prompt("Ingrese su edad")))
registroDiario.push(cliente1)

let prestamo1 = new Prestamo(parseInt(prompt("Ingrese monto de préstamo")), parseInt(prompt("Ingrese el plazo del préstamo")), parseInt(prompt("Ingrese su situación de veraz")))

class Promociones {

}
