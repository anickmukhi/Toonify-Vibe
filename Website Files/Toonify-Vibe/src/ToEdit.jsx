import React from "react";
import { Link } from "react-router-dom";

const ToEdit = () => {
  return (
    <div>
      <div
        style={{
          margin: "auto",
          height: "74vh",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            margin: "auto",
            justifyContent: "center",
            width: "25%",
            background: "#6254f3",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "solid black 1px",
            borderRadius: "30px",
          }}
        >
          <Link style={{ width: "100%", height: "100%" }} to={"/ToCreate"}>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "50px",
                marginTop: "100px",
              }}
            >
              <b>Convert Your Image</b>
            </p>
          </Link>
        </div>
        <div
          style={{
            margin: "auto",
            justifyContent: "center",
            width: "25%",
            background: "#6254f3",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "solid black 1px",
            borderRadius: "30px",
          }}
        >
          <Link style={{ width: "100%", height: "100%" }} to={"/ToLive"}>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "50px",
                marginTop: "70px",
              }}
            >
              <b>
                Convert Your Webcam
                <br /> Feed
              </b>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToEdit;
