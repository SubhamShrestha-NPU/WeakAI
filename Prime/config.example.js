// Configuration template for WeakAI Prime
// Copy this file to config.js and add your actual API keys

const CONFIG = {
    // OpenCage Geocoding API
    // Get your free API key at: https://opencagedata.com/api
    OPENCAGE_API_KEY: 'YOUR_OPENCAGE_API_KEY_HERE',
    
    // Optional: Other API configurations
    // GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE', // For future AI features
    
    // Application settings
    DEFAULT_VOICE_INDEX: 0,
    SPEECH_RATE: 1.5,
    SPEECH_PITCH: 1.5,
    SPEECH_VOLUME: 1.0
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
