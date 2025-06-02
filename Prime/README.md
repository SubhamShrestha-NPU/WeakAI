# WeakAI Prime - Descartes AI Assistant 🤖

Welcome to **WeakAI Prime**, featuring **Descartes** - your sophisticated AI assistant with a beautiful glassmorphism UI! This upgraded version offers enhanced visual design, personality modes, and interactive features.

## ✨ **Key Features**

- 🎨 **Beautiful Glassmorphism UI** with light/dark themes
- 🎭 **Multiple Personality Modes** (Rude, Polite, Intelligent)
- 🎤 **Voice Interaction** with text-to-speech
- 🎮 **Integrated Games** (Ludo, Tic-Tac-Toe, etc.)
- 🌍 **Geolocation Services** (with API integration)
- 🔍 **Web Search Integration** (DuckDuckGo)
- 📱 **App Launching Capabilities**
- 🎯 **Animated Background** with dynamic blobs

## 🚀 **Quick Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/WeakAI-Prime.git
cd WeakAI-Prime/Prime
```

### **2. Configure API Keys**
```bash
# Copy the configuration template
cp config.example.js config.js
```

Edit `config.js` and add your API keys:
```javascript
const CONFIG = {
    OPENCAGE_API_KEY: 'your-opencage-api-key-here',
    // ... other settings
};
```

### **3. Get Your Free API Keys**

#### **OpenCage Geocoding API (Required for location features)**
1. Visit [OpenCage Data](https://opencagedata.com/api)
2. Sign up for a free account
3. Get your API key (2,500 free requests/day)
4. Add it to `config.js`

### **4. Run the Application**
Simply open `index.html` in your browser - no server required!

## 🎯 **Usage**

- **Voice Commands**: Type any question or command
- **Theme Switching**: Click the theme button to toggle light/dark mode
- **Personality Modes**: Access via the hamburger menu → Personalities
- **Games**: Access via the hamburger menu → Games
- **Location**: Ask "Where am I now?" (requires location permission)

## 🛠 **Development**

### **Project Structure**
```
WeakAI/Prime/
├── index.html          # Main application
├── script.js           # Core functionality
├── styles.css          # Styling and animations
├── root.css           # CSS variables and themes
├── sidebar.js         # Navigation functionality
├── response.json      # AI response database
├── config.example.js  # Configuration template
└── config.js         # Your API keys (gitignored)
```

### **Key Technologies**
- **Vanilla JavaScript** (ES6+)
- **CSS3** with custom properties
- **Web APIs**: Speech Synthesis, Geolocation, Fetch
- **Responsive Design** with glassmorphism effects

## 🎨 **Customization**

### **Adding New Responses**
Edit `response.json` to add new personality-based responses:
```json
{
  "introductory": [
    "Rude response",
    "Neutral response", 
    "Polite response",
    // ... more responses
  ]
}
```

### **Themes**
Modify CSS variables in `root.css`:
```css
:root {
  --primary-color: #4a90e2;
  --background: #1f1e1e;
  /* ... more variables */
}
```

## 🔒 **Security**

- **API keys** are stored in `config.js` (gitignored)
- **No server-side code** - runs entirely in browser
- **CORS-enabled APIs** only for web search functionality

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Credits**

- **OpenCage Data** for geocoding services
- **DuckDuckGo** for web search integration
- **Google Fonts** for typography
- **Web Speech API** for voice synthesis

## 📞 **Support**

- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/WeakAI-Prime/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/WeakAI-Prime/discussions)
- 📧 **Contact**: [your-email@domain.com]

---

**Made with ❤️ and lots of ☕** | Star ⭐ if you found this helpful!
