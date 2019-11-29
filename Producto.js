export default class Product{
    constructor(codigo, nombre, costo, cantidad, descripcion){
        this._codigo = codigo;
        this._nombre = nombre;
        this._costo = costo;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._izquierda = null;
        this._derecha = null;
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get costo(){
        return this._costo;
    }

    get cantidad(){
        return this._cantidad;
    }

    get descripcion(){
        return this._descripcion;
    }

    get izquierda(){
        return this._izquierda;
    }

    set izquierda(izquierda){
        this._izquierda = izquierda;
    }

    get derecha(){
        return this._derecha;
    }

    set derecha(derecha){
        this._derecha = derecha;
    }

    toString(){
        return 'Código: ' + this._codigo + ', Nombre: ' + this._nombre + ', Precio: $' + this._costo + ', Cantidad: ' + this._cantidad + ', Descripción: ' + this._descripcion;
    }
}