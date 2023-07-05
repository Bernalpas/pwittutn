

//arreglos
let banana = 'banana';
let manzana = 'manzana';
let peras = 'peras';

//array - arreglo - vector
//índice          0          1           2         3       4     - posición de los elementos
let frutas = ['mangos', 'bananas', 'manzanas', 'peras', 'ananá'];

//índice         0          1            2         3        4            5                6        7
let persona = ['Pepe', 123456789, 'San Martín 200', 7, 2615589654, ['Juan', 'Mario'], 'Argentina', true];

//acceso al arreglo - todos los elemetos
console.log(frutas);

console.log('============================================================================');

console.log(persona);

console.log('============================================================================');


//acceso al elemento por su índice
//muestro manzanas
console.log('El elemento más vendido es: ' + frutas[0] + ' y el que no vendemos es ' + frutas[4]);
console.log('El elemento del índice 1 es: ' + frutas[1]);
console.log('El elemento del índice 2 es: ' + frutas[2]);
console.log('El elemento del índice 3 es: ' + frutas[3]);
console.log('El elemento del índice 4 es: ' + frutas[4]);


console.log('============================================================================');

console.log(persona[5][1]);

console.log('============================================================================');
//bucles: son pequeñas estructuras repetitivas de código 

//for
//         inicio                límite                   paso
/* for (  let index = 0   ;   index < array.length     ;      index++) {
    //código para repetir siempre que sea true
    const element = array[index];
} */


// i = index de emmet
for (let i = 0; i < 10; i++) {
    console.log('Estamos contando de 0 a 9: ' + i);    
}


console.log('============================================================================');
console.log(persona.length);
console.log('============================================================================');

for (let i = 0; i < persona.length; i++) {
    console.log(`Los elementos de Persona son: ${persona[i]}`);   
    console.log('Los elementos de Persona son: ' + persona[i]);  
}


console.log('============================================================================');
console.log('============================================================================');

//introducir datos en un array
let alumnos = [];
let data = prompt('Introduce un/a Alumno/a: ');
//función para guardar daton en un arreglo - push
if(!data){
    alert('No se introdujo ningún dato');
}else{
    alumnos.push(data)
    alert(`Ingresamos el alumno ${data} al Arreglo de Alumnos`)
}

console.log(alumnos);




