import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
// import "./Demo.css";

export const Demo = ({ image, setImage }) => {
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef(null);
  // const onChange = (e) => {
  //   e.preventDefault();
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   } else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  //   reader.readAsDataURL(files[0]);
  // };

  const getCropData = () => {
    setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <br />
        <br />
        <Cropper
          ref={cropperRef}
          style={{ height: 300, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={80}
          minCropBoxWidth={20}
          background={false}
          responsive={false}
          movable={false}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />

        <h1>
          <span>Crop</span>
          <button style={{ float: "right" }} onClick={getCropData}>
            Crop Image
          </button>
          <img style={{ width: "100%" }} src={cropData} alt="cropped" />
        </h1>
      </div>
    </div>
  );
};

export default Demo;
