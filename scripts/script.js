// JavaScript Document
const startpagina = document.querySelector("#startpagina");
const volgend = document.querySelector("#volgend");
const meldingen = document.querySelector("#meldingen");
const bewaard = document.querySelector("#bewaard");
const detailOpties = document.querySelector("#detailOpties");
const optiesMenu2 = document.querySelector("#optiesMenu2");
const sluiten = document.querySelector(".optiesMenu button");
const sluiten2 = document.querySelector("#optiesMenu2 button");

let opties = document.querySelector(".optiesKnop");
let optiesMenu = document.querySelector(".optiesMenu");

startpagina.addEventListener("click", function(){
    let actief = document.querySelector(".actief");
    actief.classList.remove("actief");
    startpagina.classList.add("actief");
});

volgend.addEventListener("click", function(){
    let actief = document.querySelector(".actief");
    actief.classList.remove("actief"); 
    volgend.classList.add("actief");
});

meldingen.addEventListener("click", function(){
    let actief = document.querySelector(".actief");
    actief.classList.remove("actief");
    meldingen.classList.add("actief");
});

bewaard.addEventListener("click", function(){
    let actief = document.querySelector(".actief");
    actief.classList.remove("actief");
    bewaard.classList.add("actief");
}); 

opties.addEventListener("click", function(){
    optiesMenu.style.display = "block";
});

sluiten.addEventListener("click", function(){
    optiesMenu.style.display = "none";
    console.log("wagwan");
});

detailOpties.addEventListener("click", function(){
    optiesMenu2.style.display = "block";
});

sluiten2.addEventListener("click", function(){
    optiesMenu2.style.display = "none";
    console.log("wagwan");
});
