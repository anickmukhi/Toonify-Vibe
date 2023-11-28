import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { Modal, Upload } from "antd";
import { Button } from "./styles/Button.js";
import { ProgressBar } from "react-loader-spinner";
import axios from "axios";
import "./App.css";
import { imgDB, txtDB } from "./DBconnect";
import { v4 } from "uuid";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const uploadButton = (
  <div className="upload-button">
    <p
      style={{
        fontSize: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      +
    </p>
    <div style={{ marginTop: 8, fontSize: "18px" }}>Upload Image</div>
  </div>
);

const ToCreate = () => {
  const [isloadClicked, setIsloadClicked] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [count, setCount] = useState(-1);
  const [showBTN, showbtn] = useState(false);
  const [showMSG, showmsg] = useState(false);

  const handleprocess = () => {
    showmsg(false);
    showbtn(false);
    setIsloadClicked(true);
    setTimeout(() => {
      setIsloadClicked(false);
      showbtn(true);
    }, 4500);
  };
  const handledownload = () => {
    showbtn(false);
    setIsloadClicked(true);
    setTimeout(() => {
      setIsloadClicked(false);
      showmsg(true);
    }, 3000);
  };

  // const [array] = useState([
  //   "https://firebasestorage.googleapis.com/v0/b/toonifyvibe.appspot.com/o/Images%2FImage2.jpg?alt=media&token=91e2a8de-f65b-4ce4-b5cd-2f80583efab9",
  //   "https://firebasestorage.googleapis.com/v0/b/toonifyvibe.appspot.com/o/Images%2FImage3.jpg?alt=media&token=2a8e3b69-b290-47a5-a3e7-18f23a534cc5",
  //   "https://firebasestorage.googleapis.com/v0/b/toonifyvibe.appspot.com/o/Images%2FImage4.jpg?alt=media&token=0951f4e2-2260-4ff2-ab64-9c3b6d0b2912",
  // ]);

  const handleCancel = () => setPreviewOpen(false);

  // const handleload = () => {
  //   showimage(false);
  //   setIsloadClicked(true);
  //   setTimeout(() => {
  //     setIsloadClicked(false);
  //     setCount(count + 1);
  //     showimage(true);
  //   }, 4000);
  // };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      try {
        file.preview = await getBase64(file.originFileObj);
      } catch (error) {
        console.error("Error generating preview:", error);
      }
    }
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
    setPreviewOpen(true);
  };

  const handleChange = async ({ fileList: newFileList }) => {
    console.log("hi1");
    try {
      setFileList(newFileList);

      if (newFileList.length > 0) {
        const formData = new FormData();
        formData.append("file", newFileList[0].originFileObj);

        // const response = await axios.post("https://your-upload-endpoint.com/upload", formData);

        // if (response.status === 200) {
        //   setImageUrl(response.data.url);
        // }
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);

    onImageUpload(imageFile);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "gray", marginTop: "40px" }}>
        Upload Image
      </h2>

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
            marginTop: "60px",
            justifyContent: "center",
            width: "25%",
            background: "#e5e7eb",
            height: "60%",
            width: "35%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="image-upload"
            style={{ height: "100%", width: "100%" }}
          >
            <Upload
              action="https://your-upload-endpoint.com/upload"
              // className="text-black w-200"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              style={{ width: 2050, height: 2050 }} // Set the dimensions here
            >
              {fileList?.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
              style={{ height: "100%", width: "100%" }}
            >
              <img
                alt="Preview"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }} // Adjust the maxWidth as needed
                src={previewImage}
              />
            </Modal>
          </div>
        </div>

        {/* <div
          style={{
            margin: "auto",
            justifyContent: "space-evenly",
            width: "25%",
            background: "#e2e8f0",
            height: "50%",
          }}
        >
          {selectedImage && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="mx-auto rounded-lg shadow-md max-h-60"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
            // ------------------------------------------------------------------------------------------loading
          >
            {showIMG && <img height={"260px"} src={array[count]} />}
            <ThreeDots
              height="200"
              width="200"
              radius="9"
              color="#6254f3"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={isloadClicked}
            />
          </div>
        </div> */}
      </div>

      <div
        style={{
          textAlign: "center",

          marginBottom: "50px",
          marginTop: "-200px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          {showMSG && (
            <p
              style={{
                marginBottom: "50px",
                fontSize: "25px",
              }}
            >
              Download Complete!!
            </p>
          )}
          <ProgressBar
            height="200"
            width="160"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#6254f3"
            barColor="#6254f3"
            visible={isloadClicked}
          />
        </div>
        <Button
          style={{
            marginTop: "-50px",
          }}
          onClick={handleprocess}
        >
          Convert
        </Button>
        <br />
        <br />
        {showBTN && <Button onClick={handledownload}>Download</Button>}
      </div>
    </div>
  );
};

export default ToCreate;
