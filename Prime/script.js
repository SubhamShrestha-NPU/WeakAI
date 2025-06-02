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
let openOutlook = [];
let openSkype = [];
let openOneNote = [];
let openCalendar = [];
let openNotePad = [];
let hi = [];
let bye = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}
class Blob {
    constructor(ele) {
        this.ele = ele;
        this.size = ele.getBoundingClientRect().width;
        this.x = random(0, window.innerWidth - this.size);
        this.y = random(0, window.innerHeight - this.size);
        this.vx = random(1.5, 2.5) * Math.random() > 0.5 ? 1 : -1;
        this.vy = random(1.5, 2.5) * Math.random() > 0.5 ? 1 : -1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if ((this.x > window.innerWidth - this.size) || (this.x < 0)) {
            this.vx *= -1;
        }
        if ((this.y > window.innerHeight - this.size || (this.y < 0))) {
            this.vy *= -1;
        }
    }

    move() {
        this.ele.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`;
    }
}

function initBlob() {
    const blobEls = document.querySelectorAll('.blob');
    const blobs = Array.from(blobEls).map(blobEl => new Blob(blobEl));

    function render() {
        blobs.forEach(blob => {
            blob.update();
            blob.move();
        });
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

// Call the initBlob function to start the animation
initBlob();

// Fetch the JSON file once
fetch('response.json')
    .then(response => {
        console.log('JSON fetch response status:', response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('JSON data loaded successfully:', Object.keys(data));
        // Assign arrays to variables
        empty = data.empty;
        offensive = data.offensive;
        affirmative = data.affirmative;
        nonsensicalMath = data.nonsensicalMath;
        introductory = data.introductory;
        meaningOfLife = data.meaningOfLife;
        repeatAfterMe = data.repeatAfterMe;
        openWhatsApp = data.openWhatsApp;
        openOutlook = data.openOutlook;
        openSkype = data.openSkype;
        openOneNote = data.openOneNote;
        openCalendar = data.openCalendar;
        openNotePad = data.openNotePad;
        hi = data.hi;
        bye = data.bye;
        
        console.log('Response arrays loaded - hi array length:', hi ? hi.length : 'undefined');
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        console.error('Falling back to default responses');
        
        // Fallback responses for GitHub Pages
        empty = ["Please type something!", "I need input to respond!", "What would you like to ask?"];
        hi = ["Hello there!", "Hi! How can I help you?", "Greetings! What can I do for you?"];
        bye = ["Goodbye!", "See you later!", "Take care!"];
        affirmative = ["Thank you!", "I appreciate that!", "Glad to help!"];
        offensive = ["Let's keep this respectful", "Please be polite", "I'm here to help"];
        // Set other arrays to prevent undefined errors
        nonsensicalMath = ["That doesn't look like valid math"];
        introductory = ["I'm Descartes, your AI assistant"];
        meaningOfLife = ["42, of course!"];
        repeatAfterMe = ["I'll repeat what you say"];
        openWhatsApp = ["Opening WhatsApp"];
        openOutlook = ["Opening Outlook"];
        openSkype = ["Opening Skype"];
        openOneNote = ["Opening OneNote"];
        openCalendar = ["Opening Calendar"];
        openNotePad = ["Opening Notepad"];
    });
    
let voices = [];
let selectedVoice;
let z = Number(localStorage.getItem('voice'));

/* LIVE HANDLING */
function initializeVoices() {
    voices = window.speechSynthesis.getVoices();
    console.log('Available voices:', voices.length); // Debug for GitHub Pages
    selectedVoice = voices.find(voice => voice.name === 'Google UK English Male') || voices[z] || voices[0];
    console.log('Selected voice:', selectedVoice ? selectedVoice.name : 'No voice available');
}

// Initialize voices with multiple fallbacks for GitHub Pages
initializeVoices();
window.speechSynthesis.onvoiceschanged = initializeVoices;

// Add a small delay for GitHub Pages voice loading
setTimeout(initializeVoices, 100);

function speak() {
    const text = document.getElementById('command').value.trim();
    const textArr = text.split('');
    const numArr = textArr.filter(char => /[0-9+\-*/]/.test(char)); // Corrected regex and filter logic
    const randomizer = Math.random(); //Math.floor(Math.random() * (max - min + 1) ) + min;
    let x;
    let y;

    let currentMode = localStorage.getItem('mode');
    
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
        print(text, x);
    } else if (offense.some(word => text.toLowerCase().includes(word.toLowerCase()))) {
        x = offensive[y];
        print(text, x);
    } else if (affirm.some(word => text.toLowerCase().includes(word.toLowerCase()))) {
        x = affirmative[y];
        print(text, x);
    } else if (/[0-9+\-*/]/.test(text)) {
        // Corrected regex and condition
        try {
            x = 'It will be ' + eval(numArr.join('')); // Use eval with caution
            print(text, x);
        } catch (e) {
            x = nonsensicalMath[y];
            print(text, x);
        }
    } else if (text === 'Who are you' || text === 'who are you?' || text === 'Who are you?') {
        x = introductory[y];
        print(text, x);
    } else if (text === 'What is the meaning of life' || text === 'what is the meaning of life?' || text === 'What is the meaning of life?') {
        x = meaningOfLife[y];
        print(text, x);
    } else if (text === 'Repeat after me' || text === 'repeat after me' || text === 'Repeat after me?') {
        x = repeatAfterMe[y];
        print(text, x);
    } else if (text == "What's the time" || text === "what's the time?" || text === "What's the time?") {
        x = 'It\'s ' + new Date().toLocaleTimeString();
        print(text, x);
    } else if (text === "Where am I now" || text === "Where am I now?") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const apiKey = CONFIG.OPENCAGE_API_KEY; // Load from config
                    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            if (data.results && data.results.length > 0) {
                                const place = data.results[0].formatted;
                                x = `You are at ${place}.`;
                                print(text, x);
                            } else {
                                x = 'Unable to retrieve your location.';
                                print(text, x);
                            }
                            speakText(x); // Call a function to speak the text
                        })
                        .catch(error => {
                            x = 'Unable to retrieve your location.';
                            speakText(x); // Call a function to speak the text
                            print(text, x);
                        });
                },
                function (error) {
                    x = 'Sorry, I am unable to retrieve your location.';
                    speakText(x); // Call a function to speak the text
                    print(text, x);
                }
            );
        } else {
            x = 'Geolocation is not supported by this browser.';
            speakText(x); // Call a function to speak the text
            print(text, x);
        }
    } else if (text === "Open Whatsapp") {
        x = openWhatsApp[y];
        window.location.href = 'whatsapp://send';
        print(text, x);
    } else if (text === "Open Outlook") {
        x = openOutlook[y];
        window.location.href = 'mailto:';
        print(text, x);
    } else if (text === "Open Skype") {
        x = openSkype[y];
        window.location.href = 'skype:';
        print(text, x);
    } else if (text === "Open OneNote") {
        x = openOneNote[y];
        window.location.href = 'onenote:';
        print(text, x);
    } else if (text === "Open Calendar") {
        x = openCalendar[y];
        window.location.href = 'outlookcal:';
        print(text, x);
    } else if (text === "Open Notepad" || text === "Open NotePad") {
        x = openNotePad[y];
        window.location.href = "notepad:"; // Open Notepad application
        print(text, x);
    } else if (/hi/i.test(text) || /hello/i.test(text) || /hey/i.test(text)) {
        x = hi[y];
        print(text, x);
    } else if (/goodbye/i.test(text) || /bye/i.test(text)) {
        x = bye[y];
        print(text, x);
    } else if (/What's the date/i.test(text)) {
        x = `YoYo, today is ${new Date().toDateString()}`;
        print(text, x);
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
                    print(text, resultText);
                    speakText(resultText, 'en'); // Utter the search result
                } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
                    const firstResult = data.RelatedTopics[0];
                    const resultText = `I found this: ${firstResult.Text}. You can read more at ${firstResult.FirstURL}`;
                    print(text, resultText);
                    speakText(resultText, 'en'); // Utter the search result
                } else {
                    print(text, 'I could not find any results.');
                    speakText('I could not find any results.', 'en'); // Utter no results found
                }
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                speakText('There was an error fetching the search results.', 'en'); // Utter error message
            });
    }
    speakText(x);
}

function print(query, response) {
    console.log(`You: ${query}`);
    console.log(`Descartes: ${response}`);
}

// Ensure voices are loaded before calling speak
window.speechSynthesis.onvoiceschanged = function () {
    initializeVoices();
};


function speakText(text) {
    // GitHub Pages compatibility checks
    if (!window.speechSynthesis) {
        console.error('Speech synthesis not supported');
        return;
    }
    
    if (!text || text.trim() === '') {
        console.warn('No text to speak');
        return;
    }
    
    // Stop any ongoing speech (important for GitHub Pages)
    window.speechSynthesis.cancel();
    
    // Add small delay for GitHub Pages
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text.toString());
        
        // Enhanced voice selection for GitHub Pages
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else if (voices && voices.length > 0) {
            utterance.voice = voices[0];
            console.log('Using fallback voice:', voices[0].name);
        }
        
        utterance.lang = 'en-US';
        utterance.pitch = 1.5;
        utterance.rate = 1.5;
        utterance.volume = 1;
        
        // GitHub Pages error handling
        utterance.onerror = function(event) {
            console.error('Speech error:', event.error);
            // Try again with default voice
            if (event.error === 'voice-unavailable') {
                const fallbackUtterance = new SpeechSynthesisUtterance(text);
                fallbackUtterance.lang = 'en-US';
                window.speechSynthesis.speak(fallbackUtterance);
            }
        };
        
        utterance.onstart = function() {
            console.log('Speaking:', text.substring(0, 30) + '...');
        };
        
        utterance.onend = function() {
            console.log('Speech completed');
        };
        
        console.log('Attempting speech synthesis...');
        window.speechSynthesis.speak(utterance);
    }, 50); // Small delay helps with GitHub Pages
}
const button = document.getElementById('btn');

// GitHub Pages voice activation - ensure first interaction enables speech
let speechInitialized = false;
function ensureSpeechReady() {
    if (!speechInitialized) {
        // Silent utterance to initialize speech for GitHub Pages
        const testUtterance = new SpeechSynthesisUtterance('');
        testUtterance.volume = 0;
        window.speechSynthesis.speak(testUtterance);
        speechInitialized = true;
        console.log('Speech synthesis initialized for GitHub Pages');
    }
}

button.addEventListener('click', () => {
    ensureSpeechReady(); // Ensure speech is ready for GitHub Pages
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
        ensureSpeechReady(); // Ensure speech is ready for GitHub Pages
        button.click();
    }
});