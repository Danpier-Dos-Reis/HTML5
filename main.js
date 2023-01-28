"use strict";
const btn = document.querySelector("#principalBTN");
const alerta = document.querySelector("#alert");
const cerrar = document.querySelector("span");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alerta.setAttribute("style", "bottom: 50%; transition: 0.5s;");
});
cerrar === null || cerrar === void 0 ? void 0 : cerrar.addEventListener("click", () => {
    alerta.removeAttribute("style");
    alerta.setAttribute("style", "bottom: 100%; transition: 0.5s;");
});
