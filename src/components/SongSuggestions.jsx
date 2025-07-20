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

const SongSuggestions = ({ emotion }) => {
  const songs = songMap[emotion] || [];

  return (
    <div className="songs-container">
      <h2 className="songs-heading">
        🎧 Moodify Playlist for: <span className="emotion-name">{emotion}</span>{" "}
        {emojiMap[emotion]}
      </h2>

      <div className="songs-grid">
        {songs.map((song, i) => (
          <div key={i} className="song-card">
            <h4>{song.title}</h4>
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/${song.videoId}`}
              title={`YouTube - ${song.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongSuggestions;
