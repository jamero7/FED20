// JavaScript Document
const startpagina = document.querySelector("#startpagina");
const volgend = document.querySelector("#volgend");
const meldingen = document.querySelector("#meldingen");
const bewaard = document.querySelector("#bewaard");

const startpaginaicoon = document.querySelector("#startpaginaicoon");
const volgendicoon = document.querySelector("#volgendicoon");
const meldingenicoon = document.querySelector("#meldingenicoon");
const bewaardicoon = document.querySelector("#bewaardicoon");

startpagina.addEventListener("click", function(){
    startpagina.classList.add("actief");
    volgend.classList.remove("actief");
    meldingen.classList.remove("actief");
    bewaard.classList.remove("actief"); 
    
    startpaginaicoon.classList.add("actief");
    volgendicoon.classList.remove("actief");
    meldingenicoon.classList.remove("actief");
    bewaardicoon.classList.remove("actief"); 
});

volgend.addEventListener("click", function(){
    startpagina.classList.remove("actief");
    volgend.classList.add("actief");
    meldingen.classList.remove("actief");
    bewaard.classList.remove("actief"); 
    
    startpaginaicoon.classList.remove("actief");
    volgendicoon.classList.add("actief");
    meldingenicoon.classList.remove("actief");
    bewaardicoon.classList.remove("actief"); 
});

meldingen.addEventListener("click", function(){
    startpagina.classList.remove("actief");
    volgend.classList.remove("actief");
    meldingen.classList.add("actief");
    bewaard.classList.remove("actief"); 
    
    startpaginaicoon.classList.remove("actief");
    volgendicoon.classList.remove("actief");
    meldingenicoon.classList.add("actief");
    bewaardicoon.classList.remove("actief"); 
});

bewaard.addEventListener("click", function(){
    startpagina.classList.remove("actief");
    volgend.classList.remove("actief");
    meldingen.classList.remove("actief");
    bewaard.classList.add("actief"); 
    
    startpaginaicoon.classList.remove("actief");
    volgendicoon.classList.remove("actief");
    meldingenicoon.classList.remove("actief");
    bewaardicoon.classList.add("actief"); 
}); 
