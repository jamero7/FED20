// JavaScript Document
const startpagina = document.querySelector("#startpagina");
const volgend = document.querySelector("#volgend");
const meldingen = document.querySelector("#meldingen");
const bewaard = document.querySelector("#bewaard");

startpagina.addEventListener("click", function(){
    startpagina.classList.add("actief");
    volgend.classList.remove("actief");
    meldingen.classList.remove("actief");
    bewaard.classList.remove("actief"); 
});

volgend.addEventListener("click", function(){
    startpagina.classList.remove("actief");
    volgend.classList.add("actief");
    meldingen.classList.remove("actief");
    bewaard.classList.remove("actief"); 
});

meldingen.addEventListener("click", function(){
    startpagina.classList.remove("actief");
    volgend.classList.remove("actief");
    meldingen.classList.add("actief");
    bewaard.classList.remove("actief"); 
});
bewaard.addEventListener("click", function(){
    startpagina.classList.remove("actief");
    volgend.classList.remove("actief");
    meldingen.classList.remove("actief");
    bewaard.classList.add("actief"); 
}); 
