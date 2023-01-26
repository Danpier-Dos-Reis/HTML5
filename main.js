"use strict";
//#region Capturing/Default Event Propagation
// const buttons = document.getElementsByTagName("button");
// //#region Nota
// /*
// Al dar click al botón pequeño también estamos dando click a otros elementos
// que se encuentran externos pero que cubren al botón.
var _a, _b, _c;
// El orden en que imprime los mensajes o mejor dicho "el orden en que el evento CLICK"
// recorre los elementos es descendente o "Capturing" porque primero ejecuta el CLICK del
// Documento hasta llegar al nodo más profundo del arbol (el botón).
// */
// //#endregion
// // window.addEventListener("click", (window) => {
// //     console.log(window.target); //Nos imprime todo lo que hagamos click en el document
// // },true);
// window.addEventListener("click",()=>{
//     console.log("Document/Window click event");
// }, true );
// document.addEventListener("click",() => {
//     console.log("Document click event");
// }, true );
// document.querySelector(".firstcontainer")?.addEventListener("click",() => {
//     console.log("Yellow Container")
// }, true );
// document.querySelector(".container2")?.addEventListener("click",() => {
//     console.log("Green Container")
// }, true );
// document.querySelector(".firstCard")?.addEventListener("click",() => {
//     console.log("Card Container")
// }, true );
// buttons[1].addEventListener("click",() => {
//     console.log("Little Button Clicked")
// }, true );
//#endregion
//#region Bubbling Event Propagation
// const buttons = document.getElementsByTagName("button");
// //#region Nota
// /*
// Al dar click al botón pequeño también estamos dando click a otros elementos
// que se encuentran externos pero que cubren al botón.
// El orden en que imprime los mensajes o mejor dicho "el orden en que el evento CLICK"
// recorre los elementos es ascendent o "Bubbling" porque primero ejecuta el CLICK del
// botón hasta llegar al nodo más superficial (el Document).
// */
// //#endregion
// window.addEventListener("click",()=>{
//     console.log("Document/Window click event");
// }, false );
// document.addEventListener("click",() => {
//     console.log("Document click event");
// }, false );
// document.querySelector(".firstcontainer")?.addEventListener("click",() => {
//     console.log("Yellow Container")
// }, false );
// document.querySelector(".container2")?.addEventListener("click",() => {
//     console.log("Green Container")
// }, false );
// document.querySelector(".firstCard")?.addEventListener("click",() => {
//     console.log("Card Container")
// }, false );
// buttons[1].addEventListener("click",() => {
//     console.log("Little Button Clicked")
// }, false );
//#endregion
//#region  Stop Propagation
const buttons = document.getElementsByTagName("button");
//#region Nota
/*
El orden en que imprime los elementos es Bubbling y solo imprime hasta el
contenedor verde porque allí ejecuté la función stopPropagation() y los
eventos de elementos superiores no se ejecutaron.

stopPropagation() es súper útil para prevenir que otros elemntos se ejecuten cuando presionamos
ejecutamos un evento que está dentro de otro  (flalse = bubbling ; true = capturing)
*/
//#endregion
window.addEventListener("click", () => {
    console.log("Document/Window click event");
}, false);
document.addEventListener("click", () => {
    console.log("Document click event");
}, false);
(_a = document.querySelector(".firstcontainer")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    console.log("Yellow Container");
}, false);
(_b = document.querySelector(".container2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (element) => {
    console.log("Green Container");
    element.stopPropagation();
}, false);
(_c = document.querySelector(".firstCard")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    console.log("Card Container");
}, false);
buttons[1].addEventListener("click", () => {
    console.log("Little Button Clicked");
}, false);
//#endregion
