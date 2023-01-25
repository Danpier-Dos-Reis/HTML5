let buttons = document.getElementsByTagName("button");

function changeColor(element :HTMLElement){
    element?.setAttribute("style","background-color: red;");
}
    
    buttons[0].addEventListener("click", (e) => {
        // " e.CurrentTarget " se refiere al elemento que disparó el evento
        let parent:HTMLElement = e.currentTarget as HTMLElement;
            parent = parent.parentElement as HTMLElement;
        changeColor(parent);
    });

    /*" e " es opcional, solo es necesario en ciertos casos como el anterior
        donde fué necesario hacer referencia al elemento disparador*/
    buttons[1].addEventListener("click", () => {
        let parent : HTMLElement = buttons[1].parentElement  as HTMLElement;
        changeColor(parent);
    });

    buttons[2].addEventListener("click", (button) => {
        let boton:HTMLElement = button.currentTarget as HTMLElement;
        let parent = boton.parentElement as HTMLElement; // parent = <div class="container">
        changeColor(parent);
    });
    buttons[3].addEventListener("click", (element) => {
        let parent:HTMLElement = element.currentTarget as HTMLElement;
            parent = parent.parentElement as HTMLElement;
        changeColor(parent);
    });

let padre = buttons[0].parentElement;
console.log(padre as HTMLElement);