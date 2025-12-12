import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const emojiMap = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  surprised: "😲",
  disgusted: "🤢",
  fearful: "😨",
  neutral: "😐",
};

const FaceDetector = ({ setMood }) => {
  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [currentMood, setCurrentMood] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = "/models";
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        startVideo();
      } catch (err) {
        console.error("Error loading models:", err);
        setIsLoading(false);
      }
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 640, height: 480 } })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Webcam access error:", err);
          setIsLoading(false);
        });
    };

    videoRef.current && loadModels();
  }, []);

  useEffect(() => {
    const detectMood = async () => {
      if (!videoRef.current || isLoading) return;

      setIsDetecting(true);
      const detections = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      if (detections?.expressions) {
        const sorted = Object.entries(detections.expressions).sort(
          (a, b) => b[1] - a[1]
        );
        const topMood = sorted[0][0];
        const moodConfidence = sorted[0][1];

        setCurrentMood(topMood);
        setConfidence((moodConfidence * 100).toFixed(1));
        setMood(topMood);
      }
      setIsDetecting(false);
    };

    const interval = setInterval(detectMood, 2000);
    return () => clearInterval(interval);
  }, [isLoading, setMood]);

  return (
    <div className="face-detector-container">
      <div className="detector-card">
        <h2 className="detector-title">
          <span className="title-icon">📸</span>
          Face Emotion Detection
        </h2>

        <div className="video-wrapper">
          {isLoading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Loading camera...</p>
            </div>
          )}
          <video ref={videoRef} autoPlay muted className="emotion-video" />
          {isDetecting && <div className="scanning-line"></div>}
        </div>

        {currentMood && (
          <div className="mood-display">
            <div className="mood-badge">
              <span className="mood-emoji">{emojiMap[currentMood]}</span>
              <div className="mood-info">
                <span className="mood-label">Detected Mood:</span>
                <span className="mood-name">
                  {currentMood.charAt(0).toUpperCase() + currentMood.slice(1)}
                </span>
              </div>
            </div>
            <div className="confidence-bar">
              <div className="confidence-label">
                <span>Confidence</span>
                <span className="confidence-value">{confidence}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div className="detection-status">
          <div
            className={`status-indicator ${isDetecting ? "detecting" : "idle"}`}
          ></div>
          <span>{isDetecting ? "Analyzing..." : "Ready"}</span>
        </div>
      </div>
    </div>
  );
};

export default FaceDetector;
