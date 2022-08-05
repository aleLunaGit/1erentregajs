alert("Bienvenido")
alert("Por favor, ingrese correctamente los siguientes datos")


class Clientes {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.dni = dni
    }
}


let registroClientes = []
const cliente1 = new Clientes("Daniel", "Aramayo", 12864871)
registroClientes.push(cliente1)
const cliente2 = new Clientes("Jose", "Cortez", 32321542)
registroClientes.push(cliente2)
const cliente3 = new Clientes("David", "Hernandez", 22456123)
registroClientes.push(cliente3)
const cliente4 = new Clientes("Miguel", "Luna", 34568815)
registroClientes.push(cliente4)
const cliente5 = new Clientes("Enrique", "Sosa", 41654789)
registroClientes.push(cliente5)

console.log(registroClientes)



class Prestamo {
    constructor(monto, plazo, veraz) {
        this.monto = monto,
            this.plazo = plazo,
            this.veraz = veraz
    }
}

let registroPrestamos = []
const prestamo1 = new Prestamo(40000, 12, 3)
registroPrestamos.push(prestamo1)
const prestamo2 = new Prestamo(250000, 24, 1)
registroPrestamos.push(prestamo2)
const prestamo3 = new Prestamo(78000, 36, 1)
registroPrestamos.push(prestamo3)
const prestamo4 = new Prestamo(50000, 6, 2)
registroPrestamos.push(prestamo4)
const prestamo5 = new Prestamo(150000, 12, 2)
registroPrestamos.push(prestamo5)

console.log(registroPrestamos)

function nuevoCliente(){
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let dni = parseInt(prompt("Ingrese su dni"))
    let clienteNuevo = new Clientes (nombre, apellido, dni)
    registroClientes.push(clienteNuevo)
}

function nuevoPrestamo(){
    let monto = parseInt(prompt("Ingrese el monto a solicitar"))
    let plazo = parseInt(prompt("Ingrese el plazo del préstamo"))
    let veraz = parseInt(prompt("Indique su situación de veraz"))
    let prestamoNuevo = new Prestamo (monto, plazo, veraz)
    registroPrestamos.push(prestamoNuevo)
}

nuevoCliente()
nuevoPrestamo()



// no he tenido el tiempo de realizar realmente lo que tengo en mente, lo estaré terminando para la reentrega.