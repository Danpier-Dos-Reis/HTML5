"use strict";
//#region  Descending Event Propagation
const btn = document.querySelector(".btnchangeBodyColor");
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
//#region  Ascending/Default Event Propagation
const bigButton = document.querySelector(".changeBorderColor");
const card = document.querySelector(".bordercolor");
function changeBorderColor(element) {
    if (element.classList.contains("firstCard")) {
        element.classList.remove("firstCard");
    }
    else {
        element.classList.add("firstCard");
    }
}
bigButton === null || bigButton === void 0 ? void 0 : bigButton.addEventListener("click", () => { changeBorderColor(card); });
//#endregion
