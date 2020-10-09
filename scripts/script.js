// JavaScript Document
const startpagina = document.querySelector("#startpagina");
const volgend = document.querySelector("#volgend");
const meldingen = document.querySelector("#meldingen");
const bewaard = document.querySelector("#bewaard");

var actief = document.getElementsByClassName("actief");

startpagina.addEventListener("click", function(){
    actief.classList.remove("actief");
});

volgend.addEventListener("click", function(){
    actief.classList.remove("actief"); 
});

meldingen.addEventListener("click", function(){
    actief.classList.remove("actief");
});

bewaard.addEventListener("click", function(){
    actief.classList.remove("actief");
}); 
