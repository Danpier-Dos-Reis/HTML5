"use strict";
//#region Event Delegation
const btn = document.querySelector("#container");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (event) {
    const element = event.target;
    console.log(element.getAttribute("id") + " is CLICKED");
    if (element.matches("li")) {
        element.style.backgroundColor = "red";
    }
});
//#endregion
