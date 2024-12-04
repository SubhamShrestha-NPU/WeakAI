"use strict";
const sidepanel = document.getElementById("sidepanel");
const openBtn = document.getElementsByClassName("openBtn");
const hamburgerImg = document.getElementById("hamburger-img");
const command = document.getElementById("command");
const btn = document.getElementById("btn");
const modal = document.getElementById('modal');

function openNav() {
    sidepanel.style.visibility = "visible";
    sidepanel.style.transform = "translateX(0)";
    sidepanel.style.width = "250px";
    for (let i = 0; i < openBtn.length; i++) {
        openBtn[i].style.visibility = "hidden";
    }
    hamburgerImg.style.visibility = "hidden";
    command.style.zIndex = "-1";
    btn.style.zIndex = "-1";
}

function closeNav() {
    sidepanel.style.visibility = "hidden";
    sidepanel.style.width = "0";
    for (let i = 0; i < openBtn.length; i++) {
        openBtn[i].style.visibility = "visible";
    }
    hamburgerImg.style.visibility = "visible";
    command.style.zIndex = "2";
    btn.style.zIndex = "2";
}

function options(optName) {
    switch (optName) {
        case 'persona':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Personalities</div> <br/>
                              Descartes has 3 personalities: <br/>
                              <label><input type="radio" name="persona" value="Rude"> Rude</label><br/>
                              <label><input type="radio" name="persona" value="Polite"> Polite</label><br/>
                              <label><input type="radio" name="persona" value="Intelligent"> Intelligent</label></br>
                              <button id=\"personaConfirm\" class=\"mo-cf\">Confirm</button>`;
            break;
        case 'voice':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Voice</div>`;
            break;
        case 'theme':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Themes</div>`;
            break;
        case 'tutorial':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">How To</div>`;
            break;
        case 'games':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Games</div>`;
            break;
        default:
            modal.innerHTML = ``;
    }
    modal.style.visibility = "visible";
    modal.style.zIndex = "10";
    modal.style.display = "block";
}

function closeMod() {
    modal.style.visibility = "hidden";
    modal.style.zIndex = "-1";
    modal.style.display = "none";
}