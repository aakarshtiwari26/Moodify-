import React, { useState } from 'react';
import FaceDetector from './components/FaceDetector';
import SongSuggestions from './components/SongSuggestions';

const App = () => {
  const [mood, setMood] = useState(null);

  return (
    <div className="app">
      <h1>🎧 Moodify</h1>
      <FaceDetector setMood={setMood} />
      {mood && <SongSuggestions mood={mood} />}
    </div>
  );
};

export default App;
