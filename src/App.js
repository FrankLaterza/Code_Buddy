import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);

  const startCapture = async () => {
    try {
      // Access the webcam and get a stream
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Attach the stream to the video element
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      // Hide the video element
      videoRef.current.style.display = 'none';

      // Capture the frame from the video element
      html2canvas(videoRef.current).then((canvas) => {
        // Convert the captured frame to a data URL (base64)
        const dataURL = canvas.toDataURL('image/png');

        // Set the captured image in state
        setCapturedImage(dataURL);

        // Stop the webcam stream
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());

        // Show the video element again if needed
        videoRef.current.style.display = 'block';
      });
    }
  };

  return (
    <div className="App">
      <h1>Webcam Capture</h1>
      <button onClick={startCapture}>Start Webcam</button>
      <button onClick={captureImage}>Capture Image</button>
      {capturedImage && (
        <div>
          <h2>Captured Image:</h2>
          <img src={capturedImage} alt="Captured" />
          <a
            href={capturedImage}
            download="captured_image.png"
            style={{ display: 'block', marginTop: '10px' }}
          >
            Download Image
          </a>
        </div>
      )}
      <video ref={videoRef} autoPlay muted style={{ display: 'block' }}></video>
    </div>
  );
}

export default App;