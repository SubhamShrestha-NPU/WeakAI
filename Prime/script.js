"use strict";
/* PRE-SETUP */
let empty = [];
let offensive = [];
let affirmative = [];
let nonsensicalMath = [];
let introductory = [];
let meaningOfLife = [];
let repeatAfterMe = [];
let openWhatsApp = [];
let openOutLook = [];
let openSkype = [];
let openOneNote = [];
let openCalendar = [];
let openNotePad = [];
let hi = [];
let bye = [];

// Fetch the JSON file once
fetch('response.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        // Assign arrays to variables
        empty = data.empty;
        offensive = data.offensive;
        affirmative = data.affirmative;
        nonsensicalMath = data.nonsensicalMath;
        introductory = data.introductory;
        meaningOfLife = data.meaningOfLife;
        repeatAfterMe = data.repeatAfterMe;
        openWhatsApp = data.openWhatsApp;
        openOutLook = data.openOutLook;
        openSkype = data.openSkype;
        openOneNote = data.openOneNote;
        openCalendar = data.openCalendar;
        openNotePad = data.openNotePad;
        hi = data.hi;
        bye = data.bye;
    })
    .catch(error => console.error('Error fetching JSON:', error));
    
let voices = [];
let selectedVoice;

/* LIVE HANDLING */
function initializeVoices() {
    voices = window.speechSynthesis.getVoices();
    selectedVoice = voices.find(voice => voice.name === 'Google UK English Male') || voices[1];
}

function speak() {
    const text = document.getElementById('command').value.trim();
    const textArr = text.split('');
    const numArr = textArr.filter(char => /[0-9+\-*/]/.test(char)); // Corrected regex and filter logic
    const randomizer = Math.random(); //Math.floor(Math.random() * (max - min + 1) ) + min;
    let x;

    let currentMode = localStorage.getItem('mode');
    let y;
    if (currentMode === 'Rude') {
        y = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    } else if (currentMode === 'Polite') {
        y = Math.floor(Math.random() * (5 - 3 + 1) + 3);
    } else if (currentMode === 'Intelligent') {
        y = Math.floor(Math.random() * (8 - 6 + 1) + 6);
    }

    const offense = ["stupid", "moron", "bad ai", "shut up", "stop", "idiot", "dumb", "fool", "insult", "hate", "hater", "nonsense", "rubbish", "garbage", "worthless", "useless", "irrelevant", "incompetent", "inadequate"]; // Define your array of offensive words
    let affirm = ["good", "great", "excellent", "awesome", "amazing", "superb", "fantastic", "brilliant", "wonderful", "terrific", "exceptional", "outstanding", "remarkable", "splendid", "magnificent", "glorious", "resplendent", "dazzling", "breathtaking", "awe-inspiring", "impressive", "inspiring", "uplifting", "heartwarming", "encouraging", "motivating", "empowering", "confidence-boosting", "life-changing", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful",
                 "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat"] //array of affirmative words
    
    
    if (text === "") {
        x = empty[y];
    } else if (offense.some(word => text.toLowerCase().includes(word.toLowerCase()))) {
        x = offensive[y];
    } else if (affirm.some(word => text.toLowerCase().includes(word.toLowerCase()))) {
        x = affirmative[y];
    } else if (/[0-9+\-*/]/.test(text)) {
        // Corrected regex and condition
        try {
            x = 'It will be ' + eval(numArr.join('')); // Use eval with caution
        } catch (e) {
            x = nonsensicalMath[y];
        }
    } else if (text === 'Who are you' || text === 'who are you?' || text === 'Who are you?') {
        x = introductory[y];
    } else if (text === 'What is the meaning of life' || text === 'what is the meaning of life?' || text === 'What is the meaning of life?') {
        x = meaningOfLife[y];
    } else if (text === 'Repeat after me' || text === 'repeat after me' || text === 'Repeat after me?') {
        x = repeatAfterMe[y];
    } else if (text == "What's the time" || text === "what's the time?" || text === "What's the time?") {
        x = 'It\'s ' + new Date().toLocaleTimeString();
    } else if (text === "Where am I now" || text === "Where am I now?") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const apiKey = 'CONFIG.OPENCAGE_API_KEY'; // Your OpenCage API key
                    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            if (data.results && data.results.length > 0) {
                                const place = data.results[0].formatted;
                                x = `You are at ${place}.`;
                            } else {
                                x = 'Unable to retrieve your location.';
                            }
                            speakText(x); // Call a function to speak the text
                        })
                        .catch(error => {
                            x = 'Unable to retrieve your location.';
                            speakText(x); // Call a function to speak the text
                        });
                },
                function (error) {
                    x = 'Sorry, I am unable to retrieve your location.';
                    speakText(x); // Call a function to speak the text
                }
            );
        } else {
            x = 'Geolocation is not supported by this browser.';
            speakText(x); // Call a function to speak the text
        }
    } else if (text === "Open Whatsapp") {
        x = openWhatsApp[y];
        window.location.href = 'whatsapp://send'
    } else if (text === "Open Outlook") {
        x = openOutLook[y];
        window.location.href = 'mailto:'
    } else if (text === "Open Skype") {
        x = openSkype[y];
        window.location.href = 'skype:'
    } else if (text === "Open OneNote") {
        x = openOneNote[y];
        window.location.href = 'onenote:'
    } else if (text === "Open Calendar") {
        x = openCalendar[y];
        window.location.href = 'outlookcal:'
    } else if (text === "Open Notepad" || text === "Open NotePad") {
        x = openNotePad[y];
        window.location.href = "notepad:"; // Open Notepad application
    } else if (/hi/i.test(text) || /hello/i.test(text) || /hey/i.test(text)) {
        x = hi[y];
    } else if (/goodbye/i.test(text) || /bye/i.test(text)) {
        x = bye[y];
    } else if (/What's the date/i.test(text)) {
        x = `YoYo, today is ${new Date().toDateString()}`;
    } else {
        searchInternet(text); // Search the internet for other cases
    }

    /* function openApp(url) {
        const link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } */
    
    function searchInternet(query) {
        const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.AbstractText) {
                    const resultText = `${data.Heading}. ${data.AbstractText}. You can read more at ${data.AbstractURL}`;
                    speakText(resultText, 'en'); // Utter the search result
                } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
                    const firstResult = data.RelatedTopics[0];
                    const resultText = `I found this: ${firstResult.Text}. You can read more at ${firstResult.FirstURL}`;
                    speakText(resultText, 'en'); // Utter the search result
                } else {
                    speakText('I could not find any results.', 'en'); // Utter no results found
                }
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                speakText('There was an error fetching the search results.', 'en'); // Utter error message
            });
    }


    const utterance = new SpeechSynthesisUtterance(x);
    utterance.voice = selectedVoice;
    utterance.lang = 'en-US'; // Set the language
    utterance.pitch = 1; // Set the pitch
    utterance.rate = 0.8; // Set the rate of speech
    utterance.volume = 1; // Set the volume to maximum

    window.speechSynthesis.speak(utterance);
}

// Ensure voices are loaded before calling speak
window.speechSynthesis.onvoiceschanged = function () {
    initializeVoices();
};

// Initialize voices on page load
initializeVoices();

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.lang = 'en-US'; // Set the language
    utterance.pitch = 0.5; // Set the pitch
    utterance.rate = 1.2; // Set the rate of speech
    utterance.volume = 1; // Set the volume to maximum

    window.speechSynthesis.speak(utterance);
}
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const keyEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        keyCode: 13,
        code: 'Enter'
    });
    document.dispatchEvent(keyEvent);
});
// Add event listener for keydown event
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        button.click();
    }
});
 