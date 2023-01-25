let buttons = document.getElementsByTagName("button");

function changeColor(element :HTMLElement){
    element?.setAttribute("style","background-color: red;");
}
function printAlert(){
    alert("I also Love JavaScript"); //Third Button execute this
}
function cardsOver(element:HTMLElement){
    element.style.backgroundColor = "#84F46FB0";
}

//#region  Buttons *click* event
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

buttons[2].addEventListener("click", printAlert);
buttons[3].addEventListener("click", (element) => {
    let parent:HTMLElement = element.currentTarget as HTMLElement;
        parent = parent.parentElement as HTMLElement;
    changeColor(parent);
});
//#endregion

//#region  Cards  *mouseover* event
let firstCard:HTMLElement = document.querySelector(".first") as HTMLElement;
let secondCard:HTMLElement = document.querySelector(".second") as HTMLElement;
let thirdCard:HTMLElement = document.querySelector(".third") as HTMLElement;
let forthCard:HTMLElement = document.querySelector(".forth") as HTMLElement;

firstCard.addEventListener("mouseover", (e) => {cardsOver(e.currentTarget as HTMLElement)});
secondCard.addEventListener("mouseover", (e) => {cardsOver(e.currentTarget as HTMLElement)});
thirdCard.addEventListener("mouseover", (e) => {cardsOver(e.currentTarget as HTMLElement)});
forthCard.addEventListener("mouseover", (e) => {cardsOver(e.currentTarget as HTMLElement)});

//#endregion