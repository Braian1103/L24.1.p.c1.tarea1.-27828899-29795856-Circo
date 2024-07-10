export default class artículos{
    constructor(nombre, precio, unidad){
        this.nombre = nombre;
        this.precio = precio;
        this.unidad = unidad;
    }

    set precio(p){
        this._precio  = +p;
    }

    get precio(){
        return this._precio;
    }

}