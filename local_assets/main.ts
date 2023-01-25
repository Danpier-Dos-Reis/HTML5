//#region  Descending Event Propagation
const btn = document.querySelector("button") as HTMLElement;
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

//Descending Event Propagation