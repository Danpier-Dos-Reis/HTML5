"use strict";
let buttons = document.getElementsByTagName("button");
function changeColor(element) {
    element === null || element === void 0 ? void 0 : element.setAttribute("style", "background-color: red;");
}
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
buttons[2].addEventListener("click", (button) => {
    let boton = button.currentTarget;
    let parent = boton.parentElement; // parent = <div class="container">
    changeColor(parent);
});
buttons[3].addEventListener("click", (element) => {
    let parent = element.currentTarget;
    parent = parent.parentElement;
    changeColor(parent);
});
let padre = buttons[0].parentElement;
console.log(padre);
