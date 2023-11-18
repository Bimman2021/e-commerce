import React, { useState } from "react";
import tesseract from "../config/tesseract";
import { Spinner } from "react-bootstrap";
import Demo from "../component/cropper";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.component}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.onHide}>
          Close
        </button>
        <Button onClick={props.onHide}>crop</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ImgToText = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setIsLoading(true);
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(() => reader.result);
      setModalShow(true);
      // tesseract(reader.result)
      //   .then((res) => {
      //     setText(res);
      //   })
      //   .catch(() => {
      //     alert("Error occurred reading image");
      //   })
      //   .finally(() => setIsLoading(false));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-3 text-center">
      <div className="flex justify-content-center align-center text-center my-3">
        {/*  */}
        <h1>upload an image to get the text</h1>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          component={<Demo image={imagePreview} />}
        />
      </div>
      <div className="form-group">
        <input
          type="file"
          onChange={handleImageChange}
          className="form-control"
          accept="image/*"
        />
      </div>
      <div
        className="my-3"
        style={{ border: "1px solid #ccc", minHeight: 300 }}
      >
        {isLoading ? (
          <Spinner color="#FF4C3B" />
        ) : (
          <div>
            {" "}
            {text ? (
              <div>
                <div className="d-flex justify-content-center">
                  <img
                    src={imagePreview}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: 150,
                      width: 150,
                    }}
                  />
                </div>
                <p className="p-3">{text}</p>
              </div>
            ) : (
              <div style={{ fontStyle: "italic" }}>Image Texts Shows Here</div>
            )}
          </div>
        )}
      </div>
      <p style={{ fontStyle: "italic" }}>code with love @bim-tec 💖</p>
      <Demo />
    </div>
  );
};

export default ImgToText;
