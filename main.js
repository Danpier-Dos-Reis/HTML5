"use strict";
const showContent = document.querySelector(".second");
const hideContent = document.querySelector(".hide");
function revealContent() {
    if (showContent === null || showContent === void 0 ? void 0 : showContent.classList.contains("second")) {
        showContent.classList.remove("second");
    }
    else {
        showContent === null || showContent === void 0 ? void 0 : showContent.classList.add("second");
    }
}
const btnContent = document.querySelector("button");
btnContent === null || btnContent === void 0 ? void 0 : btnContent.addEventListener("click", revealContent);
