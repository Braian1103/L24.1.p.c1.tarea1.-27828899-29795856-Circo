/*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
reporte al final el porcentaje de personas que son mayores de edad. 
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida 
presenta el siguiente formato:*/

import Cl_personas from "./Cl_personas.js";
import Cl_meyor  from "./Cl_mayor.js";

let per1 = new Cl_personas("luis", 15);
let per2 = new Cl_personas("ana", 19);
let per3 = new Cl_personas("jose", 21);
let per4 = new Cl_personas("carmen", 17);
let per5 = new Cl_personas("rosa", 18);
let per6 = new Cl_personas("jose", 22);
let per7 = new Cl_personas("maria", 17);
let per8 = new Cl_personas("luz", 19);
let per9 = new Cl_personas("rafael", 23);
let per10 = new Cl_personas("liz",15);
let per11 = new Cl_personas("marcos", 20);
let per12 = new Cl_personas("leo", 16);

let mayor = new Cl_meyor();

mayor.procesarpersonas(per1);
mayor.procesarpersonas(per2)
mayor.procesarpersonas(per3);
mayor.procesarpersonas(per4);
mayor.procesarpersonas(per5);
mayor.procesarpersonas(per6);
mayor.procesarpersonas(per7);
mayor.procesarpersonas(per8);
mayor.procesarpersonas(per9);
mayor.procesarpersonas(per10);
mayor.procesarpersonas(per11);
mayor.procesarpersonas(per12);


let salida = document.getElementById("salida");

salida.innerHTML =`
Cantidad de personas: ${mayor.cantidadpersonas()}<br>
Cantidad de personas mayor de edad: ${mayor.mayoredad()}<br>
Porcentaje de personas mayor de edad: ${mayor.porsentaje()} %
`