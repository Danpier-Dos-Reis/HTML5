//#region Event Delegation
const btn = document.querySelector("#container") as HTMLElement;

btn?.addEventListener("click", function(event ) {
   const element:HTMLElement = event.target as HTMLElement;
   console.log(element.getAttribute("id")+" is CLICKED");

   if(element.matches("li")){
        element.style.backgroundColor = "red";
   }
});

//#endregion