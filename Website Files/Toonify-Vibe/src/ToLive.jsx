import React, { useRef } from "react";
import "./App.css";
import Webcam from "react-webcam";
import { Button } from "./styles/Button.js";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const ToLive = () => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "webcam_image.jpg";
    link.click();
  }, [webcamRef]);

  return (
    <>
      <h2 style={{ textAlign: "center", color: "gray" }}>Live Feed</h2>
      <br />
      <br />
      <div className="user-info-student">
        <br />
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            className="webcam-video"
            height={720}
            screenshotFormat="image/jpeg"
            width={1200}
            videoConstraints={videoConstraints}
          />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button onClick={capture}>Capture</Button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default ToLive;
