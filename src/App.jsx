import React, { useState } from "react";
import FaceDetector from "./components/FaceDetector";
import SongSuggestions from "./components/SongSuggestions";
import "./App.css";

const App = () => {
  const [mood, setMood] = useState(null);

  return (
    <div className="app">
      <div className="background-gradient"></div>
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <header className="app-header">
        <div className="logo-container">
          <div className="logo-icon">🎵</div>
          <h1 className="app-title">Moodify</h1>
        </div>
        <p className="app-subtitle">
          AI-Powered Mood Detection & Music Recommendation
        </p>
      </header>

      <main className="main-content">
        <FaceDetector setMood={setMood} />
        {mood && <SongSuggestions mood={mood} />}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ by Aakarsh • Powered by Face-API.js</p>
      </footer>
    </div>
  );
};

export default App;
