/*Para un espectáculo de circo se tienen 3 tipos de entrada: niños (hasta 12 años), adolescentes 
(hasta 18) y adultos (mayores de 18, respectivamente), el precio de la entrada general es de 
15$. Por cada espectador se tiene: nombre, edad y sexo. Además, se sabe que si el 
espectador es niño o adolescente obtiene un descuento del 10%. Se requiere mostrar: a) 
Precio Cancelado por cada espectador, b) Promedio de las Ventas hechas a espectadores 
adolescentes, c) Entre niños y adolescentes cuál asistió más al circo, b) Porcentaje que 
representa la cantidad de niños que asistieron al circo con respecto al total de espectadores 
procesados. 
El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre, 
edad, sexo) (Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M), según lo cual la salida 
requerida presenta el siguiente formato: */



import Cl_espectaculo  from "./Cl_espectaculo.js";
import Cl_espectadores  from "./Cl_espectadores.js";

let espec1 = new Cl_espectadores("Ana", 8 ,"F");
let espec2 = new Cl_espectadores("Luis", 15 ,"M");
let espec3 = new Cl_espectadores("Valeria", 12 , "F");
let espec4 = new Cl_espectadores("Fabian", 21 , "M");

let circo = new Cl_espectaculo();

circo.procesarespectadores(espec1);
circo.procesarespectadores(espec2)
circo.procesarespectadores(espec3);
circo.procesarespectadores(espec4);

let salida = document.getElementById("salida");

salida.innerHTML = `
El espectador Ana debe cancelar: ${circo.preciocancelado(espec1)}
<br>El espectador Luis debe cancelar: ${circo.preciocancelado(espec2)} 
<br>El espectador Valeria debe cancelar: ${circo.preciocancelado(espec3)} 
<br>El espectador Fabián debe cancelar: ${circo.preciocancelado(espec4)}<br> 

Promedio de las Ventas hechas a espectadores adolescentes: ${circo.promedioadolesentes()} 
<br>Entre niños y adolescentes el espectador que asistió más al circo fue: ${circo.asistencias()}
<br>Porcentaje que representa la cantidad de niños que asistieron al circo: ${circo.porcentajeniños()}%`;