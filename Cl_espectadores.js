export default class espectadores{
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;

        }

        set edad(e){
            this._edad = +e;
        }

        get edad(){
            return this._edad;
        }

        
}