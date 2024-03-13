import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat(lista) {
    
    let txt = "<table>";
    for (let index = 0; index < lista.length; index++) {
     txt += `
        <tr>
        <th>${lista[index].nev}</th>
        <th>${lista[index].nemzetiseg}</th>
        <th>${lista[index].versenyIdo}</th>
        <th>${lista[index].versenySzam}</th>
    </tr>`;
     
    }
    txt += `</table>`;
    return txt;
 }

const listaElem = document.getElementById("feladat_1");
listaElem.innerHTML = letrehozTablazat(FUTOK);
 


    


// 2. feladat
function osszesit(lista) {
    let maraton = 0;
    let félmaraton = 0;
    const ossz = 0;
    for (let index = 0; index < lista.length; index++) {
        ossz += lista[index].versenySzam
        
    }

}

// 3. feladat
function befutott(sor, adatok) {

    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}