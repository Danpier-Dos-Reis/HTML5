//#region  Descending Event Propagation
const btn = document.querySelector(".btnchangeBodyColor") as HTMLElement;
const body = document.body as HTMLElement;

function changeBackgroundDirection(element : HTMLElement){
    if(element.classList.contains("cuerpo")){
        element.classList.remove("cuerpo");
    }
    else{
        element.classList.add("cuerpo");
    }
}
//No sé  por qué no me dejó pasar la función directamente
btn?.addEventListener("click", function(){ changeBackgroundDirection(body) });

//#endregion

//#region  Ascending/Default Event Propagation
const bigButton = document.querySelector(".changeBorderColor");
const card = document.querySelector(".bordercolor")

function changeBorderColor(element:HTMLElement){
    if(element.classList.contains("firstCard")){
        element.classList.remove("firstCard");
    }
    else{
        element.classList.add("firstCard");
    }
}

bigButton?.addEventListener("click", () => { changeBorderColor(card as HTMLElement) });

//#endregion