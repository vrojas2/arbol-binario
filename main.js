import BinarySearchTree from "./BinarySearchTree.js";
import Producto from "./Producto.js";

var inventario = new BinarySearchTree();
var mostrarInventario = document.querySelector('#inventario');

document.querySelector('#btnAgregar').addEventListener('click', () => {
    let codigo = Number(document.querySelector('#codigo').value),
        nombre = document.querySelector('#nombre').value,
        costo = Number(document.querySelector('#costo').value),
        cantidad = Number(document.querySelector('#cantidad').value),
        descripcion = document.querySelector('#descripcion').value;
    inventario.agregar(new Producto(codigo, nombre, costo, cantidad, descripcion));
});

document.querySelector('#btnBusqueda').addEventListener('click', () => {
    let divBuscar = document.querySelector('#buscar');
    let buscar = inventario.busqueda(Number(document.querySelector('#busquedaCodigo').value));
    if (buscar != ''){
    divBuscar.innerHTML = buscar;
    } else {
        alert('Producto no encontrado');
    }
});


document.querySelector('#btnInOrder').addEventListener('click', () => {
    mostrarInventario.innerHTML = '';
    mostrarInventario.innerHTML = inventario.inOrder();
});

document.querySelector('#btnPreOrder').addEventListener('click', () => {
    mostrarInventario.innerHTML = '';
    mostrarInventario.innerHTML = inventario.preOrder();
});

document.querySelector('#btnPostOrder').addEventListener('click', () => {
    mostrarInventario.innerHTML = '';
    mostrarInventario.innerHTML = inventario.postOrder();
});