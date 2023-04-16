/*Generaciones - Dificultad:  🟢🟡

2- Crea una clase llamada Persona que siga las siguientes condiciones:

Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

Los métodos que se debe poder utilizar  son:

mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

mostrarDatos: devuelve toda la información del objeto.

Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.*/

const GeneracionZ = (1994-2010);
const GeneracionY = (1981-1993);
const GeneracionX = (1969-1980);
const BabyBoom = (1949-1968);
const SilentGeneration = (1930-1948);

class Persona {
    #nombre;
    #edad;
    #DNI;
#sexo;
#peso;
#altura;
#anio;
#generacion;

constructor (nombre, edad, DNI, sexo = ("H", "M"), peso, altura, anio, generacion = (GeneracionZ, GeneracionY,GeneracionX, BabyBoom, SilentGeneration)){
    this.#nombre = nombre;
    this.#edad = edad;
    this.#DNI = DNI;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anio = anio;
    this.#generacion = generacion;
}

get getNombre (){  
}
set setNombre (nuevoNombre){
    this.#nombre = nuevoNombre;
}
get getEdad (){
}
set setEdad (nuevaEdad){
    this.#edad = nuevaEdad;
}
get getDNI (){
    
}
set setDNI (nuevoDNI){
    this.#DNI = nuevoDNI;
}
get getSexo (){
}

set setSexo (nuevoSexo){
    this.#sexo = nuevoSexo;
}

get getPeso (){
}
set setPeso (nuevoPeso){
    this.#peso = peso;
}

get getAltura (){
    
}
set setAltura (nuevaAltura){
    this.#altura = altura;
}
get getAnio(){
}
set setAnio (nuevoAnio){
        this.#anio = nuevoAnio;
    }
get getGeneracion(){
}
set setGeneracion (nuevaGeneracion){
    this.#generacion = nuevaGeneracion;
}

mostrarGeneracion(nuevaGeneracion){
        let dob = [parseInt(prompt("Ingrese su año de nacimiento"))];
        if (dob === (1930-1948)){
    document.write(`${this.#nombre} pertenece a la ${this.#generacion}`);
}

document.write(`${this.#nombre} pertenece a la ${this.#generacion}`);
document.write(`${this.#nombre} pertenece a la ${this.#generacion}`);
document.write(`${this.#nombre} pertenece a la ${this.#generacion}`);
}

esMayorDeEdad(){
    if (this.#edad <= 18) {
        document.write(`${this.#nombre} es mayor de edad`);
    }
    }
mostrarDatos(){
    document.write(`<ul>
    <li>Nombre:${this.#nombre}</li>
    <li>Edad: ${this.#edad}</li>
    <li>DNI: ${this.#DNI}</li>
    <li>Sexo: ${this.#sexo}</li>
    <li>Peso: ${this.#peso}</li>
    <li>Altura: ${this.#altura}</li>
    <li>Año de Nacimiento: ${this.#anio}</li>
    <li>Generación: ${this.#generacion}</li>
</ul>`);
}


}

// const GeneracionZ = Persona.getGeneracion = (1930-1948);
// Persona.getGeneracion(1930-1940);

// const Generacion Y = new Generacion
// const Generacion X = new Generacion
// const Baby Boom = new Generacion
// const Silent Generation = new Generacion

// Persona.mostrarDatos();

// Persona.esMayorDeEdad();

Persona.getGeneracion = GeneracionZ, 
GeneracionY,GeneracionX, BabyBoom, SilentGeneration
const Azul = new Persona ("Azul", "34", "000000000", "M", "89", "1.57", "1988", "Millennial");
console.log(Azul);

// let newPerson = new Persona (prompt("Ingrese un nombre"))