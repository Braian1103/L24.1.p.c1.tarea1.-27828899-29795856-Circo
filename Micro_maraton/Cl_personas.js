export default class personas{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    set edad (e){
        this.nombre= +e;
    }

    get edad(){
        return this.nombre;
    }
}