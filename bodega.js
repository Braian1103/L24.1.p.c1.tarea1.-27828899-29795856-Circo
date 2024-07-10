/*En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%... 
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.*/

import Cl_costo from "./Cl_costo.js"
import Cl_articulos from "./Cl_articulos.js"

let art1 = new Cl_articulos("arina",7,2);
let art2 = new Cl_articulos("salsa",3,2);
let art3 = new Cl_articulos("pasta",10,1);
let art4 = new Cl_articulos("pasta",10,1);

let compra = new Cl_costo();

compra.procesararticulos(art1);
compra.procesararticulos(art2);
compra.procesararticulos(art3);
compra.procesararticulos(art4);


let salida = document.getElementById("salida");

salida.innerHTML = `
<br>su compra de ${compra.nom(art1)} tiene como monto: ${compra.preciounidad(art1)} 
<br>su compra de ${compra.nom(art2)} tiene como monto: ${compra.preciounidad(art2)} 
<br>su compra de ${compra.nom(art3)} tiene como monto: ${compra.preciounidad(art3)} 
<br>su compra de ${compra.nom(art4)} tiene como monto: ${compra.preciounidad(art4)}

<br>las ganacias de los productos son: ${compra.monto()}
`;
