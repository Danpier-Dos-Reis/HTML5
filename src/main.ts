const accordion = document.getElementsByClassName("content_container") as HTMLCollection;

for(let i:number = 0 ; i < accordion.length ; i++){
    accordion[i].addEventListener("click" , () => {
        let element = accordion[i] as HTMLElement
        element.classList.toggle("active")
    });
};