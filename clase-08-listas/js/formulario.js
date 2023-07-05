console.log('Formulario de Carga de Productos');

let productos = [];

//               0          1
let frutas = ['peras', 'manzanas'];

//JSON
let persona = {
    nombre:'Pepe',
    apelledio: 'Pérez',
    ciudad: 'CABA'
}

console.log(frutas[0]);
console.log(persona.nombre);


function cargarProductos() {

    //imprimimos una info de la función
    console.log(`Tus productos se cargaron a la database`);

    //tomamos los datos mediante el formulario
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;

    console.log(typeof precioProducto);

    //Objetos JSON de productos
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto  
    }

    //imprimos el objeto producto
    console.log(producto);

    //guardamos el producto en el arreglo o database
    productos.push(producto)

    //guardamos la info en el array de productos
    //productos.push(nombreProducto)
    //productos.push(precioProducto)

    //imprimimos el arreglo
    console.log(productos);

    //utilizamos el localstorage
    localStorage.setItem('Nombre', 'Pepe');

    //guardamos productos
    //localStorage.setItem('Productos', productos) - [object - object]

    //1. Creamos una variable para que podamos convertir los datos a JSON
    let misProductos = JSON.stringify(productos);

    //2. Le pasamos la variable al localStorage
    localStorage.setItem('Productos', misProductos);
    
    //imprimimos en la consola los datos del producto
    //console.log(nombreProducto);
    //console.log(precioProducto);

    //llamo a la función cargarProductos
    cargarTabla();
}


//función para cargar la tabla de productos
const cargarTabla = () =>{

    //obtener la tabla
    let tabla = document.getElementById('tablaProductos');

    //limpiar la tabla antes de que el for lo cargue de nuevo
    tabla.innerText = '';

    //recorrer el arreglo productos
    for (let i = 0; i < productos.length; i++) {

        //crear un elemeto tr
        let fila = document.createElement('tr');

        //creamos un elemento td
        let celdaNombre = document.createElement('td');
        let celdaPrecio = document.createElement('td');

        //agregamos el dato a la celda del nombre del producto
        celdaNombre.textContent = productos[i].nombre;
        celdaPrecio.textContent = productos[i].precio;

        //subimos el td al tr
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        //subimos le tr al tbody
        tabla.appendChild(fila)


        //imprimimos los JSON en el array de productos
        console.log(productos[i]);
    }

}