"use strict";

const sidepanel = document.getElementById("sidepanel");
const openBtn = document.getElementsByClassName("openBtn");
const hamburgerImg = document.getElementById("hamburger-img");
const command = document.getElementById("command");
const btn = document.getElementById("btn");
const modal = document.getElementById('modal');
const header = document.querySelector('header');

function openNav() {
    sidepanel.style.visibility = "visible";
    sidepanel.style.transform = "translateX(0)";
    sidepanel.style.width = "250px";
    hamburgerImg.style.visibility = "hidden";

    // Move only the side panel above everything else
    sidepanel.style.zIndex = "10";
    header.style.zIndex = "200";
}

function closeNav() {
    sidepanel.style.visibility = "hidden";
    sidepanel.style.width = "0";
    hamburgerImg.style.visibility = "visible";

    // Ensure cmd and btn are always on top when sidepanel is hidden
    command.style.zIndex = "2";
    btn.style.zIndex = "2";
    header.style.zIndex = "2";
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
                              <button id="personaConfirm" class="mo-cf" onclick="updateMode">Confirm</button>`;
            setCheckedMode(); // Set the checked radio button based on localStorage
            break;
        case 'voice':
            modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Voice</div>
                              <input type="radio" name="voice" value="1" onclick="setVoice()" /> <label for="voice">Voice 1</label><br/>
                              <input type="radio" name="voice" value="2" onclick="setVoice()" /> <label for="voice">Voice 2</label><br/>
                              <input type="radio" name="voice" value="3" onclick="setVoice()" /> <label for="voice">Voice 3</label><br/>
                              <button id="voiceConfirm" class="mo-cf" onclick="updateVoice()">Confirm</button>`;
            setCheckedVoice(); // Set the checked radio button based on localStorage
            break;
        case 'theme':
            modal.innerHTML =`<button id="mod-close" onclick="closeMod()">&times;</button>
                              <div class="center">Themes</div>

                              <button id="theme-switch" onclick="toggleTheme()" >
                                <img src="../Assets/DarkMode.svg" alt="Dark Mode" id="dark-mode">
                                <img src="../Assets/LightMode.svg" alt="Light Mode" id="light-mode">
                              </button>`;
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            break;
            case 'games':
                modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                <div class="center">Games</div> <br/>
                <div class="container-vCenter fd-col">
                    <button class="games" id="g1" href="#"></button>
                    <button class="games" id="g2" href="#"></button>
                    <button class="games" id="g3" href="#"></button>
                    <button class="games" id="g4" href="#"></button>
                    <button class="games" id="g5" href="#"></button>
                    <button class="games" id="g6" href="#"></button>
                    <button class="games" id="g7" href="#"></button>
                    <button class="games" id="g8" href="#"></button>
                    <button class="games" id="g9" href="#"></button>
                    <button class="games" id="g10" href="#"></button>
                </div>`;
                break;
            case 'tutorial':
                modal.innerHTML = `<button id="mod-close" onclick="closeMod()">&times;</button>
                                    <div class="center">How To</div>`;
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

/* VOICE HANDLER */
function updateVoice() {
    const voices = document.getElementsByName('voice');
    let currentVoice = '1';
    for (const voiceElement of voices) {
        if (voiceElement.checked) {
            currentVoice = voiceElement.value;
            break;
        }
    }
    localStorage.setItem('voice', currentVoice); // remembers the current value
    console.log(localStorage.getItem('voice'));
    location.reload();
}

function setCheckedVoice() {
    const currentVoice = localStorage.getItem('voice'); //retrieve the current voice
    if (currentVoice) {
        const voices = document.getElementsByName('voice');
        for (const voiceElement of voices) {
            if (voiceElement.value === currentVoice) {
                voiceElement.checked = true;
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