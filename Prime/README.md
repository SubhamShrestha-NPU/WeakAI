# WeakAI Prime - Descartes AI Assistant 🤖

Welcome to **WeakAI Prime**, featuring **Descartes** - your sophisticated AI assistant with a beautiful glassmorphism UI! This upgraded version offers enhanced visual design, personality modes, and interactive features.

## ✨ **Key Features**

- 🎨 **Beautiful Glassmorphism UI** with light/dark themes
- 🎭 **Multiple Personality Modes** (Rude, Polite, Intelligent)
- 🎤 **Voice Interaction** with text-to-speech
- 📋 **Conversation Transcript** - All interactions logged to browser console
- 🎮 **Integrated Games** (Ludo, Tic-Tac-Toe, etc.)
- 🌍 **Geolocation Services** (with API integration)
- 🔍 **Web Search Integration** (DuckDuckGo)
- 📱 **App Launching Capabilities**
- 🎯 **Animated Background** with dynamic blobs

## 🚀 **Getting Started**

### **What You Need**
- Any modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (so Descartes can tell you your location and search the web)

### **Easy Setup Guide**

#### **Step 1: Download Descartes**
**Choose one of these simple methods:**

**📥 Method A: Download as ZIP (Easiest for beginners)**
1. Go to the GitHub page for this project
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract/unzip the folder to your Desktop or Documents
5. Open the `Prime` folder inside

**💻 Method B: Using Git (if you know how)**
```bash
git clone https://github.com/yourusername/WeakAI-Prime.git
cd WeakAI-Prime/Prime
```

#### **Step 2: Set Up the Location Feature (Optional but Recommended)**

**Why do this?** This lets Descartes tell you where you are when you ask "Where am I now?"

**Don't worry - it's easier than it sounds! Just follow these steps:**

1. **Find the configuration files:**
   - Look for a file called `config.example.js` in your Descartes folder
   - You'll also see `config.js` (if not, we'll create it)

2. **Copy the template (choose your method):**
   
   **🖱️ Easy Way (Using your mouse):**
   - Right-click on `config.example.js`
   - Choose "Copy"
   - Right-click in the same folder
   - Choose "Paste"
   - Rename the copy to `config.js`
   
   **⌨️ Command Way (if you like typing):**
   ```bash
   # On Windows
   copy config.example.js config.js
   
   # On Mac/Linux
   cp config.example.js config.js
   ```

3. **Open `config.js` in any text editor (like Notepad) and you'll see:**
   ```javascript
   const CONFIG = {
       OPENCAGE_API_KEY: 'your-actual-api-key-here',
       DEFAULT_VOICE_INDEX: 0,
       SPEECH_RATE: 1.5,
       SPEECH_PITCH: 1.5,
       SPEECH_VOLUME: 1.0
   };
   ```

#### **Step 3: Get Your Free Location Key (5 minutes)**

**What's this for?** This special key lets Descartes find your location when you ask "Where am I now?"

##### **🌍 Getting Your Free OpenCage Key**
1. **Go to the website:** [opencagedata.com/api](https://opencagedata.com/api)
2. **Sign up for free:**
   - Click **"Sign up for your free API key"**
   - Enter your email and create a password
   - You get **2,500 free location requests per day** (that's plenty!)
3. **Get your key:**
   - After signing up, you'll see a dashboard
   - Copy the long string of letters and numbers (that's your key!)
4. **Add it to Descartes:**
   - Open your `config.js` file
   - Replace `'your-actual-api-key-here'` with your actual key
   - Save the file

**Example:** Change this:
```javascript
OPENCAGE_API_KEY: 'your-actual-api-key-here',
```
To this (with your real key):
```javascript
OPENCAGE_API_KEY: 'abc123def456ghi789',
```

##### **🔍 Web Search (Already Works!)**
- Descartes can search the internet automatically
- No setup needed - it just works when you ask questions!

#### **Step 4: Start Chatting with Descartes!**

**The moment you've been waiting for:**

1. **Open Descartes:**
   - Find the file called `index.html` in your Descartes folder
   - **Double-click it** - it will open in your browser
   - Or drag and drop it into any browser window

2. **Allow permissions (if asked):**
   - 🎤 **Microphone**: So Descartes can speak to you (totally optional)
   - 📍 **Location**: So Descartes can tell you where you are (also optional)

3. **You're ready!** Start typing questions and commands!

#### **Step 5: Test Everything Works**

**Try these fun commands to make sure everything is working:**

- 💬 Type: *"Hello"* (Descartes will greet you!)
- 📍 Type: *"Where am I now?"* (tests if location setup worked)
- 🔍 Type: *"What is artificial intelligence?"* (tests web search)
- 🎭 Change personalities using the menu button (☰) in the corner
- 📋 Press `F12` in your browser to see conversation logs (for advanced users)

**🎉 Congratulations! You're now chatting with Descartes!**

## 🎯 **How to Use Descartes**

**Here's what you can do with your new AI friend:**

- 💬 **Chat**: Type any question or command in the text box
- 🌙☀️ **Change Themes**: Click the theme button to switch between dark and light modes
- 🎭 **Change Personality**: Click the menu button (☰) → Personalities to make Descartes rude, polite, or intelligent
- 🎮 **Play Games**: Click the menu button (☰) → Games for fun activities
- 📍 **Find Your Location**: Ask "Where am I now?" (needs the setup from Step 2)
- 📋 **See Chat History**: Press `F12` in your browser, click "Console" to see all your conversations

**Pro Tip:** Descartes has different personalities - try switching between them to see how the responses change!

## 🛠 **For Developers & Curious Minds**

**Want to peek under the hood? Here's what makes Descartes tick:**

### **What's Inside the Folder**
```
WeakAI/Prime/
├── index.html          # The main webpage (double-click to start)
├── script.js           # The brain of Descartes
├── styles.css          # Makes everything look pretty
├── root.css           # Color themes and styling
├── sidebar.js         # Controls the menu
├── response.json      # All of Descartes' responses
├── config.example.js  # Template for your settings
└── config.js         # Your personal settings (don't share this!)
```

### **Technologies Used**
- **JavaScript**: The programming language that makes Descartes think
- **CSS**: Makes the interface beautiful with animations and themes
- **Web APIs**: Built-in browser features for speech and location
- **No Server Needed**: Everything runs right in your browser!

### **💬 Hidden Features for Tech Users**
- **Chat Logs**: All conversations are saved in browser console (`F12` → Console tab)
- **Saved Preferences**: Your theme and personality choices are remembered
- **Easy to Modify**: Want to add new responses? Just edit `response.json`

### **🔒 Privacy & Security**
- **Your API key stays private**: The `config.js` file never gets uploaded anywhere
- **No data collection**: Everything runs locally in your browser
- **Open source**: You can see exactly how everything works

## 🎨 **Make Descartes Your Own**

**Want to customize Descartes? Here's how:**

### **🗣️ Adding New Things for Descartes to Say**

1. Open the `response.json` file in any text editor
2. Find the section you want to modify (like "introductory" for greetings)
3. Add your new responses following the pattern:

```json
{
  "introductory": [
    "Rude mode - 1st response",
    "Rude mode - 2nd response", 
    "Rude mode - 3rd response",

    "Polite mode - 1st response",
    "Polite mode - 2nd response",
    "Polite mode - 3rd response",

    "Intelligent mode - 1st response",
    "Intelligent mode - 2nd response",
    "Intelligent mode - 3rd response"
  ]
}
```

**What are the three responses for?** Descartes has three personalities (Rude, Polite, Intelligent), so each personality gets its own three responses!

### **🎨 Changing Colors and Themes**

Want different colors? Open `root.css` and change these values:
```css
:root {
  --primary-color: #4a90e2;    /* Main blue color */
  --background: #1f1e1e;       /* Dark background */
  /* Change these to any color you like! */
}
```

**Color tip:** Use a color picker website like coolors.co to find color codes you like!

## 🔒 **Is My Information Safe?**

**Absolutely! Here's why you can trust Descartes:**

- 🔐 **Your location key stays private**: It's stored in a file that never gets shared online
- 🏠 **Everything runs on your computer**: No data is sent to external servers
- 👁️ **You can see everything**: The code is open source, so you can check how it works
- 🚫 **No tracking**: Descartes doesn't collect or store your personal information

**Think of it like a diary that only you can read!**

## 🤝 **Want to Help Make Descartes Better?**

**Found a cool feature idea? Want to fix something? Here's how to contribute:**

1. **Make your own copy** of the project (called "forking")
2. **Create your improvements** in a separate branch
3. **Test everything works** 
4. **Share your changes** by submitting a "pull request"

**Don't worry if that sounds complicated - even reporting bugs or suggesting features helps a lot!**

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Credits**

- **OpenCage Data** for geocoding services
- **DuckDuckGo** for web search integration
- **Google Fonts** for typography
- **Web Speech API** for voice synthesis

## 📞 **Need Help?**

**Stuck? Don't worry, we're here to help!**

- 🐛 **Found a problem?** Check the troubleshooting tips below or create an issue when this project is published
- 💬 **Have questions?** Try the common solutions below first
- 📧 **Need direct help?** Contact the developer through the project repository

### **🔧 Quick Troubleshooting**

**🚫 Location not working?**
- Make sure you copied your API key correctly into `config.js`
- Check that your internet connection is working
- Try refreshing the browser page

**🎤 Voice not working?**
- Click "Allow" when the browser asks for microphone permission
- Try a different browser (Chrome works best)
- Check your computer's volume settings

**🎨 Interface looks broken?**
- Try refreshing the page (F5 or Ctrl+R)
- Clear your browser cache
- Make sure all files are in the same folder

**Remember: There are no silly questions! Most issues have simple solutions.** 😊

---

**Made with ❤️ and lots of ☕** | Star ⭐ if you found this helpful!
