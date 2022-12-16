//Simulador de tarifas de diseño//

class ClienteUsual {
    constructor(nombre, apellido, dni, saldo) {
                                                this.nombre= nombre;
                                                this.apellido= apellido;
                                                this.dni= dni;
                                                this.saldo= saldo;
                                              }
                    }

const clienteFernandez = new ClienteUsual ("Sebastian","Fernandez", 30578998, 10000);
const clienteLauria = new ClienteUsual ("Nahuel","Lauria", 30578555, 70000);
const clienteVincenti = new ClienteUsual ("Johana","Vincenti", 38556968, 150000);
const clienteFerreyra = new ClienteUsual ("Noelia","Ferreyra", 32365998, 2000);
const clienteMoreno = new ClienteUsual ("Mabel","Moreno", 30558998, 300000);

const arrayClientesUsuales = [];

arrayClientesUsuales.push(clienteFernandez);
arrayClientesUsuales.push(clienteFerreyra);
arrayClientesUsuales.push(clienteLauria);
arrayClientesUsuales.push(clienteMoreno);
arrayClientesUsuales.push(clienteVincenti);

console.log(arrayClientesUsuales)

//Menu de opciones

function menu() {
                 alert("Bienvenidx a NahueDCV");
                 let opcion = parseInt(prompt("Ingrese una opcion: \n 1)Alta de Usuario \n 2)baja de Usuario \n 3)Modificación de Usuario \n 4)Consulta de Cliente \n 5) Salir"));
                 return opcion;
}

//Función para dar de alta un cliente:

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let ClienteUsual = new ClienteUsual(nombre, apellido, dni, saldo);
    arrayClientesUsuales.push(ClienteUsual);
    console.log(arrayClientesUsuales);
}

//Función para dar de baja un cliente:

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientesUsuales.find(cliente => cliente.dni === dni);
    let indice = arrayClientesUsuales.indexOf(cliente);
    arrayClientesUsuales.splice(indice, 1);
    console.log(arrayClientesUsuales);
}

//Función para modificar un cliente:

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientesUsuales.find(cliente => cliente.dni === dni);
    let indice = arrayClientesUsuales.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let clienteModificado = new Cliente(nombre, apellido, dni, saldo);
    arrayClientesUsuales.splice(indice, 1, clienteModificado);
    console.log(arrayClientesUsuales);
}

//Función para consultar un cliente:

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientesUsuales.find(cliente => cliente.dni === dni);
    console.log(cliente);
}


//Función para salir del programa:

function salir() {
    alert("Gracias por utilizar sistemas NahueDCV");
}

//Ejecuto el el programa:

let opcion = menu();
switch (opcion) {
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break;
    case 5:
        salir();
        break;
    default:
        alert("No es una opción posible");
        break;
}





