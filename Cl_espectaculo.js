export default class espectaculo{
    constructor(){
        this.entrada=15.0;
        this.espec=0;
        this.acedad=0;
        this.descuen=0;
        this.nuevo=0;
        this.canadolece=0;
        this.cantiniños=2;
    }

    procesarespectadores(e){
        this.acedad = e.edad
        this.espec++
        
        this.descuen = (this.entrada * 10) / 100;

        this.nuevo = this.entrada - this.descuen;

        if(e.edad < 18 && e.edad > 12){
            this.canadolece++
            
        }

        if(e.edad < 12 && e.edad > 18){
            this.cantiniños++

        }
        
    
    }

    preciocancelado(e){;
        if(e.edad < 18){
            return this.nuevo;
            
        }

        if(e.edad > 18){
            return this.entrada; 
    }
   }

    promedioadolesentes(){
        return this.canadolece * this.nuevo;
    }

    asistencias(){
        if(this.cantiniños > this.canadolece){
            return "niños"

        }else{
            return "adolecentes"
        }   
    }

    porcentajeniños(){
        return (this.espec / this.cantiniños) * 25;
    }
}