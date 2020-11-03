// JavaScript Document
const startpagina = document.querySelector("#startpagina");
const volgend = document.querySelector("#volgend");
const meldingen = document.querySelector("#meldingen");
const bewaard = document.querySelector("#bewaard");
const detailOpties = document.querySelector("#detailOpties");
const optiesMenu2 = document.querySelector("#optiesMenu2");
const sluiten = document.querySelector(".optiesMenu button");
const sluiten2 = document.querySelector("#optiesMenu2 button");

let opties = document.getElementsByClassName("optiesKnop");
let optiesMenu = document.querySelector(".optiesMenu");

function openMenu(){
    optiesMenu.style.display = "block";
};

for (var i = 0; i < opties.length; i ++) {
  var boxa = opties[i].parentNode.id;
  opties[i].addEventListener("click", function() {
    openMenu(boxa);
  }, false);
}
//De code voor de loop komt van StackOverflow, https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values

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

sluiten.addEventListener("click", function(){
    optiesMenu.style.display = "none";
});

detailOpties.addEventListener("click", function(){
    optiesMenu2.style.display = "block";
});

sluiten2.addEventListener("click", function(){
    optiesMenu2.style.display = "none";
});
