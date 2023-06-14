










console.log('3. Estoy en el archivo externo');

/* 
Comentarios 
múltiples
*/


//console.log('Esto es un comentario de una línea');

//Palabras reservadas: dar indicaciones de tareas o funciones al lenguaje de programación
/* var
let 
for
function
if 
*/

/* Casa
casa
CAsa
caSA
CASA 
*/

//variables. espacio de memoria para guardar datos
//declaración de una variable
var nombre; //no es obligatorio el ;

//asignación de una variable
// = : es un operador de asignación
nombre = "Pepe";

//recuperar la info 
console.log(nombre);

var apellido = 'Pérez';//js es flexible 

console.log(apellido);

//Declaramos y asignamos otra variable
provincia = 'Mendoza';

console.log(provincia);

//concatenar datos
console.log('Mi nombre es: ' + nombre + ' y mi apellido es: ' + apellido + " y vivo en la provincia de " + provincia);

console.log('=============================================================');

//template string: interpolar variables con strings
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido} y vivo en la provincia de ${provincia}`);


let pais = 'Argentina';//con let puedo declarar una sóla vez

var apellido = 'Gómez'

console.log('Mi nombre es: ' + nombre + ' y mi apellido es: ' + apellido + " y vivo en la provincia de " + provincia);


//let pais = 'Brasil';

pais = 'Uruguay';

pais = '1500';
dos = 2000

resultado = pais + dos

console.log(resultado);


console.log('=============================================================');

//constante: no cambia
const dni = 123456789;

//const apellido = 'Brasil';

console.log(apellido);

//dni = 11111111111;


console.log('=============================================================');
console.log('=============================================================');

//operadores matemáticos: + - * / % 
let numUno = 1000;
let numDos = 5000;

resultado = numUno + numDos;
console.log(`El resultado de la suma es ${resultado}`);

console.log('=============================================================');

resultado = numDos - numUno;
console.log(resultado);

console.log('=============================================================');

resultado = numUno * numDos;
console.log(resultado);

console.log('=============================================================');

resultado = numDos / numUno;//resultado de la división
console.log(resultado);

console.log('=============================================================');

resultado = numDos % numUno;//resto de la división
console.log(resultado);

//booleanos
let verdadero = true;
let falso = false;

console.log('=============================================================');
console.log('=============================================================');
//Operadores relacionales: ==, ===, <, >, !=, !

let edad = 18;

//condicionales: if
/* if(condition == verdadera para que se ejecute el código){

} */

if(edad < 18 ){//false
    console.log('1. No puedes comprar bebidas')
}

if(edad > 18){//false
    console.log('2. Puedes comprar bebidas')
}


if(edad >= 18){//true
    console.log('3. Puedes comprar bebidas')
}

if(edad <= 18){//true
    console.log('4. No puedes comprar bebidas')
}

if(edad == 18){//true
    console.log('5. Tenés 18 años');
}

if(edad === 18){//true
    console.log('6. Son estrictamente iguales');
}


console.log('=============================================================');
console.log('=============================================================');

let password = 123456789;


if(password === 123456789){
    console.log('Podés tener acceso a tu cuenta bancaria');
}



let a = 5;

console.log(a == 5);
console.log(a != 5);
console.log(!true);
console.log(!false);


console.log('=============================================================');
console.log('=============================================================');


//Operadores lógicos: && || 
//&& y lógico: todas las condiciones deben ser true
//|| o lógico: sólo una de las condiciones debe ser true

let cliente = true;//suponer que todos son clientes
let pagoAlDia = false;
let dia = 'viernes'

if(true){
    console.log('hola');
}

if(false){
    console.log('hola');
}

//   false        false            false = false
if(!cliente && dia == 'lunes' && pagoAlDia){
    console.log('Lo sentimos, no tenemos oferta para usted hoy');
}

//  true        false = false 
if(cliente && dia == 'lunes'){
    console.log('Por ser cliente, tiene un 50% de descuento por ser viernes');
}

//   true       true = true
if(cliente && dia == 'viernes'){
    console.log('Por ser cliente y ser viernes, tenemos un 70% de descuento');
}


console.log('=============================================================');
console.log('=============================================================');

//    false        false          false = false
if(!cliente || dia == 'lunes' || pagoAlDia){
    console.log('Lo sentimos, no tenemos oferta para usted hoy');
}

//   true       false            false  =  true
if(cliente || dia == 'lunes' || pagoAlDia){
    console.log('Por ser cliente, tiene un 50% de descuento por ser viernes');
}

//   true          true  = true
if(cliente || dia == 'viernes'){
    console.log('Por ser cliente y ser viernes, tenemos un 70% de descuento');
}

console.log('=============================================================');
console.log('=============================================================');

let usuario = 'Pepe';
let facial = false;

//        true               true     = true             
if(usuario == 'Pepe' && password == 123456789){
    console.log('Bienvenido Pepe a tu sistema');
    //se va a otra página
}


//        true               true                  false  = false
if(usuario == 'Pepe' && password == 123456789 && facial){
    console.log('Bienvenido Pepe a tu sistema');
    //se va a otra página
}

//    true                    false                false   = true
if(usuario == 'Pepe' || password == 2131453454 || facial){
    console.log('Bienvenido Pepe a tu sistema');
    //se va a otra página
}


console.log('=============================================================');
console.log('=============================================================');

/*
if (condition) {
    
} else {// o si no
    
}
*/

//    true                    false                false   = true
if(usuario == 'Pepe' && password == 2131453454 && facial){
    console.log('Bienvenido Pepe a tu sistema');
    //se va a otra página
}else{
    console.log('Ususrio o password o facial incorrectos');
}

//alert(): función modal para enviar mensajes

//prompt(): función modal para introducir datos



























