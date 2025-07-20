import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const FaceDetector = ({ setMood }) => {
  const videoRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => (videoRef.current.srcObject = stream))
        .catch(err => console.error('Webcam access error:', err));
    };

    videoRef.current && loadModels();
  }, []);

  useEffect(() => {
    const detectMood = async () => {
      const detections = await faceapi.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
      if (detections?.expressions) {
        const sorted = Object.entries(detections.expressions).sort((a, b) => b[1] - a[1]);
        const topMood = sorted[0][0];
        setMood(topMood);
      }
    };

    const interval = setInterval(detectMood, 3000);
    return () => clearInterval(interval);
  }, []);

  return <video ref={videoRef} autoPlay muted width="320" height="240" />;
};

export default FaceDetector;
