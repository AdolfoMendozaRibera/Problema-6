/*
Cofla ya esta cursando efectivamente el ultimo semestre de la universidad, asi es, tuvo todo lo 
necesario para poder lograrlo, pero tiene una pequeña duda, quiere saber cuantas personas cursan
el semestre y cuantas no, esta informacion la tiene una "Api" de su universidad a la que el
tiene muy facil acceso

PROBLEMA A
- Un sistema que le permita obtener esa informacion
- Mostrarla ordenadamente en un sitio web

*/

const getInf=async()=>
{
    let aprobados=document.querySelector(".n_aprobados");
    let desaprobados=document.querySelector(".n_desaprobados");

    try
    {
        resultado= await axios("informacion2.txt");
        aprobados.innerHTML=resultado.data.aprobados;
        desaprobados.innerHTML=resultado.data.desaprobados;
    }catch(e)
    {
        aprobados.textContent("La API fallo");
        desaprobados.textContent("La API fallo");
    }
}

document.getElementById("getInfo").addEventListener("click",getInf);