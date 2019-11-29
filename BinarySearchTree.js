export default class BinarySearchTree {
    constructor() {
        this._raiz = null;
        this._todosLosNodos = "";
    }

    agregar(nodo) {
        if (this._raiz != null) {
            this._agregar(this._raiz, nodo);
        } else {
            this._raiz = nodo;
        }
    }

    _agregar(raiz, nodo) {
        if (nodo < raiz) {
            if (raiz.izquierda != null) {
                this._agregar(raiz.izquierda, nodo);
            }
            else {
                raiz.izquierda = nodo;
            }
        } else {
            if (raiz.derecha != null) {
                this._agregar(raiz.derecha, nodo);
            }
            else {
                raiz.derecha = nodo;
            }
        }
    }

    busqueda(codigo) {
        let productFound = '';
        if (this._raiz != null) {
            let raiz = this._raiz;
            while (productFound === '') {
                if (codigo < raiz.codigo) {
                    if (raiz.izquierda != null) {
                        raiz = raiz.izquierda
                    }
                    else {
                        break;
                    }
                } else if (codigo > raiz.codigo) {
                    if (raiz.derecha != null) {
                        raiz = raiz.derecha;
                    }
                    else {
                        break;
                    }
                } else {
                    productFound = raiz.toString();
                }
            }
        }
        return productFound;
    }

    inOrder() {
        this._todosLosNodos = '';
        if (this._raiz != null) {
            this._inOrder(this._raiz);
        }
        return this._todosLosNodos;
    }

    _inOrder(raiz) {
        if (raiz != null) {
            this._inOrder(raiz.izquierda);
            this._todosLosNodos += raiz.toString() + '<br>';
            this._inOrder(raiz.derecha);
        }
    }

    preOrder() {
        this._todosLosNodos = '';
        if (this._raiz != null) {
            this._preOrder(this._raiz);
        }
        return this._todosLosNodos;
    }

    _preOrder(raiz) {
        if (raiz != null) {
            this._todosLosNodos += raiz.toString() + '<br>';
            this._preOrder(raiz.izquierda);
            this._preOrder(raiz.derecha);
        }
    }

    postOrder() {
        this._todosLosNodos = '';
        if (this._raiz != null) {
            this._postOrder(this._raiz);
        }
        return this._todosLosNodos;
    }

    _postOrder(raiz) {
        if (raiz != null) {
            this._postOrder(raiz.izquierda);
            this._postOrder(raiz.derecha);
            this._todosLosNodos += raiz.toString() + '<br>';
        }
    }
}