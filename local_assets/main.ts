//#region Handling  Propagation
const buttons = document.querySelector(".button") as HTMLElement;
//#region Nota
    // Al windows tener la propiedad *once* en TRUE su evento CLICK se ejecuta de
    //último
//#endregion

window.addEventListener("click",()=>{
    console.log("Document/Window click event");
}, false ); //once es una palabra reservada de JavaScript y se refiere a una propiedad

document.addEventListener("click",() => {
    console.log("Document click event");
}, false );

document.querySelector(".firstcontainer")?.addEventListener("click",() => {
    console.log("Yellow Container")
}, false );

document.querySelector(".container2")?.addEventListener("click",(element) => {
    console.log("Green Container");
}, { once : true } );

document.querySelector(".firstCard")?.addEventListener("click",() => {
    console.log("Card Container")
}, false );

buttons?.addEventListener("click",(event , btn? : HTMLElement) => {
    /* Nota
    Quita la acción por defecto del navegador que es recargar la página porque el href del
    link está vació
    */
   event.preventDefault(); //preventDefault() es una función del evento, no del elemento html
    btn = event.currentTarget as HTMLElement; //tenemos el elemento partiendo de su evento
    console.log(btn.innerHTML = "¡¡¡¡Clicked little button!!!!"); //innerText es una función de un elemento html no de un evento
}, false );
//#endregion