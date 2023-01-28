const btn = document.querySelector("#principalBTN");
const alerta = document.querySelector("#alert") as HTMLElement;
const cerrar = document.querySelector("span")

btn?.addEventListener("click" , () => {
    alerta.setAttribute("style","bottom: 50%; transition: 0.5s;");
});

cerrar?.addEventListener("click" , () => {
    alerta.removeAttribute("style")
    alerta.setAttribute("style" , "bottom: 100%; transition: 0.5s;")
});