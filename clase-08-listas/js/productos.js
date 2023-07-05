
console.log('Estamos en el JS de Productos');

let memoriaLocal = localStorage.getItem('Nombre');

let misProductos = localStorage.getItem('Productos');

console.log('========================');

console.log(misProductos);

console.log('========================');


console.log(memoriaLocal);

let titulo = document.getElementById('titulo');

titulo.innerHTML = memoriaLocal;



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