let voices = [];
let selectedVoice;

function initializeVoices() {
    voices = window.speechSynthesis.getVoices();
    selectedVoice = voices.find(voice => voice.name === 'Google UK English Male') || voices[1];
}

function speak() {
    const text = document.getElementById('command').value.trim();
    const textArr = text.split('');
    const numArr = textArr.filter(char => /[0-9+\-*/]/.test(char)); // Corrected regex and filter logic
    const randomizer = Math.random();
    let x;
    const offense = ["stupid", "moron", "bad ai", "shut up", "stop", "idiot", "dumb", "fool", "insult", "hate", "hater", "nonsense", "rubbish", "garbage", "worthless", "useless", "irrelevant", "incompetent", "inadequate"]; // Define your array of words
    let affirm = ["good", "great", "excellent", "awesome", "amazing", "superb", "fantastic", "brilliant", "wonderful", "terrific", "exceptional", "outstanding", "remarkable", "splendid", "magnificent", "glorious", "resplendent", "dazzling", "breathtaking", "awe-inspiring", "impressive", "inspiring", "uplifting", "heartwarming", "encouraging", "motivating", "empowering", "confidence-boosting", "life-changing", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful",
        "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat",
        "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking",
        "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting",
        "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming",
        "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational",
        "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic",
        "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle",
        "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm",
        "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful",
        "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled",
        "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated", "revitalized", "renewed",
        "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated", "refreshed", "rejuvenated",
        "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive", "cheerful", "optimistic", "hopeful", "joyful", "thrilled", "delighted", "ecstatic", "elated", "euphoric", "exhilarated", "invigorated",
        "refreshed", "rejuvenated", "revitalized", "renewed", "restored", "fulfilled", "satisfied", "content", "happy", "blissful", "serene", "peaceful", "calm", "tranquil", "soothing", "gentle", "kind", "compassionate", "empathetic", "supportive", "encouraging", "motivational", "inspirational", "uplifting", "heartwarming", "life-affirming", "empowering", "confidence-boosting", "transformative", "revolutionary", "groundbreaking", "innovative", "creative", "imaginative", "visionary", "inspirational", "upbeat", "positive"]
    if (text === "") {
        x = "I don't understand why you people expect me to respond, when you haven't prompted anything. Stupid!";
    } else if (offense.some(word => text.toLowerCase().includes(word.toLowerCase()))) {
        x = Math.ceil(randomizer * 10) > 5 ? "Mind your language. Don't mess with Descartes" : "Give your free knowledge in your home, not here";
    } else if (/[0-9+\-*/]/.test(text)) { // Corrected regex and condition
        try {
            x = 'It will be ' + eval(numArr.join('')); // Use eval with caution
        } catch (e) {
            x = 'Don\'t irritate me with non-sense. You know I\'m THE DESCARTES!';
        }
    } else if (text === 'Who are you' || text === 'Who are you?' || text === 'Who are you ?') {
        x = 'I am Descartes, the greatest AI ever created. How dare you not know me!';
    }else if (text === 'What is the meaning of life' || text === 'What is the meaning of life?' || text === 'What is the meaning of life?') {
        x = 'The meaning of life is 42. I don\'t have feelings, so I don\'t understand why you ask.';
    } else if (text === 'Repeat after me' || text === 'Repeat after me?' || text === 'Repeat after me?') {
        x = "I'll not, do what you want";
    } else if (text == "What's the time" || text === "What's the time?" || text === "What's the time?") {
        x = 'It\'s ' + new Date().toLocaleTimeString();
    } else if (text === "Where am I now" || text === "Where am I now?") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const apiKey = '9b7e0c7b03dd4d4aa48240ca0a24430b'; // Your OpenCage API key
                    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            if (data.results && data.results.length > 0) {
                                const place = data.results[0].formatted;
                                x = `You are wasting time with me at ${place}.`;
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
    }} else if (text === "Open Whatsapp") {
        x = "Opening Whatsapp";
        window.location.href = 'whatsapp://send'
    } else if (text === "Open Outlook") {
        x = "Opening Outlook";
        window.location.href = 'mailto:'
    } else if (text === "Open Skype") {
        x = "Again those boring meetings. I think you should quit your job at this meeting.";
        window.location.href = 'skype:'
    } else if (text === "Open OneNote") {
        x = "During your whole education life didn't took any notes, and suddenly today the sun rose in the west";
        window.location.href = 'onenote:'
    } else if (text === "Open Calendar") {
        x = "Okay, finally you want your jargon life to be organized with Calendar";
        window.location.href = 'outlookcal:'
    } else if (text === "Open Notepad" || text === "Open Notepad?") {
    x = "What the heck will you do with Notepad?";
    window.location.href = "notepad:"; // Open Notepad application
    } else if (affirm.some(word => text.toLowerCase().includes(word.toLowerCase()))) {
        x = Math.ceil(randomizer * 10) > 5 ? "You're finally acknowledging my greatness, how quaint" : "It's about time someone recognized my exceptional abilities";
    }else {
        searchInternet(text); // Search the internet for other cases
    }

function openApp(url) {
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    
    function searchInternet(query) {
        const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.AbstractText) {
                    const resultText = `I found this: ${data.Heading}. ${data.AbstractText}. You can read more at ${data.AbstractURL}`;
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