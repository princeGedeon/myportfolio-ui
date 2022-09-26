const hamb=document.querySelector("#hamberguer");
const menu=document.querySelector("#menu");
const hLinks=document.querySelectorAll(".hlink");

hamb.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    hamb.classList.toggle("bg-white");
})

hLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden");
        hamb.classList.toggle("bg-white");
    })
});