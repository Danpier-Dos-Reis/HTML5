"use strict";
var _a, _b, _c;
//#region Handling  Propagation
const buttons = document.querySelector(".button");
//#region Nota
// Al windows tener la propiedad *once* en TRUE su evento CLICK se ejecuta de
//último
//#endregion
window.addEventListener("click", () => {
    console.log("Document/Window click event");
}, false); //once es una palabra reservada de JavaScript y se refiere a una propiedad
document.addEventListener("click", () => {
    console.log("Document click event");
}, false);
(_a = document.querySelector(".firstcontainer")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    console.log("Yellow Container");
}, false);
(_b = document.querySelector(".container2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (element) => {
    console.log("Green Container");
}, { once: true });
(_c = document.querySelector(".firstCard")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    console.log("Card Container");
}, false);
buttons === null || buttons === void 0 ? void 0 : buttons.addEventListener("click", (event, btn) => {
    /* Nota
    Quita la acción por defecto del navegador que es recargar la página porque el href del
    link está vació
    */
    event.preventDefault();
    btn = event.currentTarget;
    console.log(btn.innerHTML = "¡¡¡¡Clicked little button!!!!");
}, false);
//#endregion
