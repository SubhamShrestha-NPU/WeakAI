"use strict";
const sidepanel = document.getElementById("sidepanel");
const openBtn = document.getElementsByClassName("openBtn");
const hamburgerImg = document.getElementById("hamburger-img");
function openNav() {
    sidepanel.style.visibility = "visible";
    sidepanel.style.translate = "0 0";
    sidepanel.style.width = "250px";
    openBtn.style.visibility = "hidden";
    hamburgerImg.style.visibility = "hidden";
}
function closeNav() {
    sidepanel.style.visibility = "hidden";
    sidepanel.style.width = "0";

}