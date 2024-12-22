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
                              <label><sub><input type="radio" name="persona" value="Rude"></sub> Rude</label><br/>
                              <label><sub><input type="radio" name="persona" value="Polite"></sub> Polite</label><br/>
                              <label><sub><input type="radio" name="persona" value="Intelligent"></sub> Intelligent</label></br>
                              <button id="personaConfirm" class="mo-cf">Confirm</button>`;
            document.getElementById('personaConfirm').addEventListener('click', updateMode);
            setCheckedMode(); // Set the checked radio button based on localStorage
            break;
        case 'voice':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Voice</div>`;
            break;
        case 'theme':
            modal.innerHTML =`<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Voice</div>

                              <button id="theme-switch" onclick="toggleTheme()" >
                                <img src="../Assets/DarkMode.svg" alt="Dark Mode" id="dark-mode">
                                <img src="../Assets/LightMode.svg" alt="Light Mode" id="light-mode">
                              </button>`;
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
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
 /* MODE HANDLER */
function updateMode() {
    const modes = document.getElementsByName('persona');
    let currentMode = 'Rude';
    for (const modeElement of modes) {
        if (modeElement.checked) {
            currentMode = modeElement.value;
            break;
        }
    }
    if (currentMode) {
        console.log("Selected Mode:", currentMode); // Logs the selected value
    } else {
        console.log("No mode selected.");
    }
    localStorage.setItem('mode', currentMode); // remembers the current value
}

function setCheckedMode() {
    const currentMode = localStorage.getItem('mode'); // Retrieve the mode from localStorage
    if (currentMode) {
        const modes = document.getElementsByName('persona');
        for (const modeElement of modes) {
            if (modeElement.value === currentMode) {
                modeElement.checked = true;
                break;
            }
        }
    }
}

/* THEMES HANDLER */
let lightMode = localStorage.getItem('lightMode');
const themeSwitch = document.getElementById('theme-switch');

function enableLightMode() { 
    document.body.classList.add('lightMode');
    localStorage.setItem('lightMode', 'active');
}
function disableLightMode() { 
    document.body.classList.remove('lightMode');
    localStorage.setItem('lightMode', null);
}

if (lightMode === 'active') {enableLightMode();}

function toggleTheme() {
    lightMode = localStorage.getItem('lightMode');
    lightMode !== "active" ? enableLightMode() : disableLightMode();
    console.log(localStorage.getItem('lightMode'));
}