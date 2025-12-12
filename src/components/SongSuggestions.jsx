import React from "react";

const songMap = {
  happy: [
    { title: "Kala Chashma", videoId: "k4yXQkG2s1E" },
    { title: "Nashe Si Chadh Gayi", videoId: "Wd2B8OAotU8" },
    { title: "Ghungroo - WAR", videoId: "qFkNATtc3mc" },
    { title: "London Thumakda", videoId: "udra3Mfw2oo" },
    { title: "Bom Diggy Diggy", videoId: "yIIGQB6EMAM" },
    { title: "The Breakup Song", videoId: "hAB2MptEqWQ" },
  ],
  sad: [
    { title: "Channa Mereya", videoId: "bzSTpdcs-EI" },
    { title: "Tujhe Bhula Diya", videoId: "-Hb2DeHvvEg" },
    { title: "Agar Tum Saath Ho", videoId: "sK7riqg2mr4" },
    { title: "Phir Le Aaya Dil", videoId: "k6BnSIs3XUQ" },
    { title: "Tera Yaar Hoon Main", videoId: "EatzcaVJRMs" },
    { title: "Humdard - Ek Villain", videoId: "FJ55SHCzt88" },
  ],
  angry: [
    { title: "Zinda - Bhaag Milkha Bhaag", videoId: "Ax0G_P2dSBw" },
    { title: "Sultan Title Track", videoId: "abiL84EAWSY" },
    { title: "Sher Aaya Sher - Gully Boy", videoId: "M81wneSjQbA" },
    { title: "Malang - Title Track", videoId: "KBIq11mNB0I" },
  ],
  surprised: [
    { title: "Malhari - Bajirao Mastani", videoId: "l_MyUGq7pgs" },
    { title: "Apna Time Aayega - Gully Boy", videoId: "jFGKJBPFdUA" },
    { title: "Kar Gayi Chull", videoId: "NTHz9ephYTw" },
    { title: "Gallan Goodiyan", videoId: "jCEdTq3j-0U" },
  ],
  disgusted: [
    { title: "Bandook Meri Laila", videoId: "wdxebKzUfIM" },
    { title: "Swag Se Swagat", videoId: "7TRFf7uUfhQ" },
    { title: "Selfie Le Le Re", videoId: "TITGBTGJZS8" },
  ],
  fearful: [
    { title: "Jee Karda - Badlapur", videoId: "VAJK04HOLd0" },
    { title: "Bhag DK Bose - Delhi Belly", videoId: "vs1IDdap3X4" },
    { title: "Bezubaan - ABCD", videoId: "7HhG7YmOkMM" },
  ],
  neutral: [
    { title: "Tum Hi Ho", videoId: "Umqb9KENgmk" },
    { title: "Raabta", videoId: "zlt38OOqwDc" },
    { title: "Tera Ban Jaunga", videoId: "Qdz5n1Xe5Qo" },
    { title: "Kesariya", videoId: "BddP6PYo2gs" },
    { title: "Shayad", videoId: "MJyKN-8UncM" },
  ],
};

const emojiMap = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  surprised: "😲",
  disgusted: "🤢",
  fearful: "😨",
  neutral: "😐",
};

const SongSuggestions = ({ mood }) => {
  const songs = songMap[mood] || [];

  const moodColors = {
    happy: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    sad: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    angry: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    surprised: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    disgusted: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    fearful: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    neutral: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  };

  return (
    <div className="songs-container">
      <div className="songs-header">
        <div
          className="mood-icon-large"
          style={{ background: moodColors[mood] }}
        >
          {emojiMap[mood]}
        </div>
        <h2 className="songs-heading">
          Your Personalized{" "}
          <span
            className="emotion-highlight"
            style={{ background: moodColors[mood] }}
          >
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </span>{" "}
          Playlist
        </h2>
        <p className="songs-subheading">
          {songs.length} handpicked tracks to match your vibe
        </p>
      </div>

      <div className="songs-grid">
        {songs.map((song, i) => (
          <div
            key={i}
            className="song-card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="song-number">{i + 1}</div>
            <div className="song-thumbnail">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${song.videoId}`}
                title={`YouTube - ${song.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="song-info">
              <h4 className="song-title">{song.title}</h4>
              <div className="play-indicator">
                <span className="play-icon">▶</span>
                <span>Click to play</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongSuggestions;
