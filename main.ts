const showContent = document.querySelector(".second");
const hideContent = document.querySelector(".hide");

function revealContent(){
    if(showContent?.classList.contains("second")){
        showContent.classList.remove("second");
    }
    else{
        showContent?.classList.add("second");
    }
}

const btnContent = document.querySelector("button");

btnContent?.addEventListener("click", revealContent);