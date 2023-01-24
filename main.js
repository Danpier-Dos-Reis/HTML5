//=======================Add Styles and Tags=====================//
// const div = document.querySelector("div");
//     div.style.margin = "4rem 5rem 0px 5rem";
//     div.className = "cuerpo";
//     div.className = div.className.toString()+" New";
//     div.style.backgroundColor = "orange";
// // div.alt = ""; No se puede porque este elemento no puede poseer este atributo

// const image = document.querySelector("img");
//     image.src = "#";
//     image.alt = "Our Team don't have Pictures :(";
// div.insertAdjacentElement("beforebegin",image);
//=========================================================//

//==============Get Array of elements============//

/*Toma Los elementos en cascada*/
// const elements = document.getElementsByTagName("h1");
// elements[1].style.backgroundColor ="red"; //Se aplica al segundo elemento

// console.log(elements); //Imprime un array de objetos HTMLCollection
//==========================================//

//==============LoopExample============//
// let div = document.getElementsByTagName("div");

// let domBody = document.body;
// for(let i = 0 ; i < 15 ; i++){

//     let inputNode = document.createElement("input");
//         inputNode.type = "text";

//     domBody.insertBefore(inputNode,div[0]);

// }
//==========================================//

//===============Add Text==================//
// let title = document.createElement("h1");
// const text = document.createTextNode("Hola Canada");
//     title.textContent = text.textContent;
//     //title.textContent = "nada importante";
// const body = document.body;
//     body.insertAdjacentElement("afterbegin",title);
// let p = document.createElement("p");
// const text = document.createTextNode("Hola Canada");
// const body = document.body;
//     p.appendChild(text);
//     body.appendChild(p);
//==========================================//

//===============Add Attributes==================//
//==============
// const body = document.body;

// const elemento = document.createElement("h1");
//     elemento.textContent = document.createTextNode("Hello Australia").textContent;
//     elemento.setAttribute("class","name_class");
//     elemento.setAttribute("id","name_id");
//     elemento.setAttribute("style","background-color: red;");
//     elemento.removeAttribute("id");

// body.insertAdjacentElement("afterbegin", elemento);
//============
// const body = document.body;
// const Tag = document.createElement("h1");
//     Tag.textContent = document.createTextNode("Hello Australia").textContent;
//     Tag.classList.add("newClass");
//     Tag.classList.add("secondClass");
//     // Tag.classList.remove("newClass");
//     Tag.classList.replace("newClass","neoClass");

// body.insertAdjacentElement("afterbegin", Tag);
//==========================================//

//==================Traversing the DOM==========//

//=========SELECT HTML=================
// let h1 = document.getElementsByTagName("h1");

// //Both are the same
// console.log(h1[0].parentElement);
// console.log(h1[0].parentNode);
//==========================

//==========SELECT HTML================
// let body = document.body;

// //Both are the same
// console.log(body.parentNode);
// console.log(document.documentElement);
//==========================

//===========The parent of the parent==========
// let h1 = document.getElementsByTagName("h1");
// console.log(h1[0].parentElement.parentElement);
//========================================

//===========The Child==========
let div = document.getElementsByTagName("div");
console.log(div[0].childElementCount); //Number of Children
console.log(div[0].childNodes); //NodeList with all Children "Include TextNodes"
console.log(div[0].children); //Array without "TextNodes"
console.log(div[0].firstChild); //Include TextNodes
console.log(div[0].lastChild); //Include TextNodes
console.log(div[0].firstElementChild); //No TextNodes
console.log(div[0].lastElementChild); //No TextNodes
//========================================

//===========Siblings / Brothers==========
let h1 = document.getElementsByTagName("h1");
let p = document.getElementsByTagName("p");

console.log(h1[0].nextSibling); //Print TextNode
console.log(p[0].previousSibling); //Print TextNode

console.log(h1[0].nextElementSibling); //Print <p>
console.log(p[0].previousElementSibling); //Print <h1>
//========================================

//==========================================//