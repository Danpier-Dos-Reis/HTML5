"use strict";
let buttons = document.getElementsByTagName("button");
function changeColor(element) {
    element === null || element === void 0 ? void 0 : element.setAttribute("style", "background-color: red;");
}
function printAlert() {
    alert("I also Love JavaScript"); //Third Button execute this
}
function cardsOver(element) {
    element.style.backgroundColor = "#84F46FB0";
}
//#region  Buttons *click* event
buttons[0].addEventListener("click", (e) => {
    // " e.CurrentTarget " se refiere al elemento que disparó el evento
    let parent = e.currentTarget;
    parent = parent.parentElement;
    changeColor(parent);
});
/*" e " es opcional, solo es necesario en ciertos casos como el anterior
    donde fué necesario hacer referencia al elemento disparador*/
buttons[1].addEventListener("click", () => {
    let parent = buttons[1].parentElement;
    changeColor(parent);
});
buttons[2].addEventListener("click", printAlert);
buttons[3].addEventListener("click", (element) => {
    let parent = element.currentTarget;
    parent = parent.parentElement;
    changeColor(parent);
});
//#endregion
//#region  Cards  *mouseover* event
let firstCard = document.querySelector(".first");
let secondCard = document.querySelector(".second");
let thirdCard = document.querySelector(".third");
let forthCard = document.querySelector(".forth");
firstCard.addEventListener("mouseover", (e) => { cardsOver(e.currentTarget); });
secondCard.addEventListener("mouseover", (e) => { cardsOver(e.currentTarget); });
thirdCard.addEventListener("mouseover", (e) => { cardsOver(e.currentTarget); });
forthCard.addEventListener("mouseover", (e) => { cardsOver(e.currentTarget); });
//#endregion
