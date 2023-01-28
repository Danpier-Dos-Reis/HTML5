const quotes = [
    {
        quote : "I don't think that you have any insight whatsoever into your capacity for good until you have some well-developed insight into your capacity for evil.",
        author : "Jordan B. Peterson"
    },
    {
        quote : "A problem defined, is a problem half solved.",
        author : "Albert Einstein"
    },
    {
        quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author : "Martin Luther King"
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi"
    },
    {
        quote : "Y yo lo entiendo porque también lo he vivido, el mundo está lleno de gente que camina sin sentido ¿Se te hace duro pensar que exista otro ser vivo que valga la pena entregarle tus latidos?",
        author : "Canserbero"
    }];

let btnLoad = document.getElementById("btnload");
const textQuote = document.querySelector(".quote") as HTMLElement;
let textAuthor = document.querySelector(".author") as HTMLElement;

btnLoad?.addEventListener("click" , () => {
    let rdn = Math.floor(Math.random() * quotes.length);
    let txtQuote:string = quotes[rdn].quote
    let txtAuthor:string = quotes[rdn].author

    textQuote.textContent = txtQuote
    textAuthor.textContent = txtAuthor
});



