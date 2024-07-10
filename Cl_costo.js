export default class costo {
    constructor () {
        this.precioporarticulo=0;
        this.acprecio=0;
        this.ganancia=0;
        this.articulo=0;
    }

    procesararticulos(p){
        this.precioporarticulo += p.precio;

        this.ganancia = this.precioporarticulo * 0.5;

        this.montototal = p.precio * p.unidad;
    }

    preciounidad(p){
       return p.precio;
    }

    monto(){
        return this.ganancia;
    }

    nom(p){
        return p.nombre;
    }      
}