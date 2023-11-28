import ImageUpload from "./ImageUpload"; // Provide the correct path to your ImageUpload component

const imageupload = () => {
  const handleImageUpload = (imageFile) => {
    // You can perform actions with the imageFile, like uploading it to a server
    console.log("Image uploaded:", imageFile.name);
  };

  return (
    <div>
      <h1>Image Upload Example</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
    </div>
  );
};

export default imageupload;





