"use strict";
//#region  Descending Event Propagation
const btn = document.querySelector("button");
const body = document.body;
function changeBackgroundDirection(element) {
    if (element.classList.contains("cuerpo")) {
        element.classList.remove("cuerpo");
    }
    else {
        element.classList.add("cuerpo");
    }
}
//No sé  por qué no me dejó pasar la función directamente
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () { changeBackgroundDirection(body); });
//#endregion
//Descending Event Propagation
