import React, { useState, useEffect, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

// var url = "http://localhost:3021/api/notepad";
var url = "https://shop-cheap-backend.onrender.com/api/notepad";

function MyVerticallyCenteredModal(props) {
  const handleClose = () => {
    if (props.currentKey === props.inputKey) {
      //continue to next
      console.log(props.data);
      const ls = props.data.find((x) => x._id === props.currentId);
      // console.log(ls);
      props.setValue(ls.text);
      props.setIsopen(true);
      props.onHide();
    } else {
      alert("invalid key");
    }
    // props.onHide;
  };
  const ps = {
    show: props.show,
    onHide: props.onHide,
  };
  return (
    <Modal
      size="lg"
      {...ps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Action Key</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter key</h4>
        <form>
          <input
            className="form-control"
            value={props.inputKey}
            onChange={(e) => props.setInputKey(e.target.value)}
            type="text"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Toolbar = (props) => {
  return (
    <div className="toolbar_quill">
      {props.isOpen ? (
        <div className="col">
          <button className="btn" onClick={() => props.setIsopen(false)}>
            <i className="iconly-Arrow-Left fs24"></i>
          </button>
          <button className="btn" onClick={props.handleSave}>
            <i className="iconly-Paper-Upload fs24"></i>
          </button>
          <button className="btn" onClick={props.handleSave}>
            <i className="iconly-Send fs24"></i>
          </button>
        </div>
      ) : (
        <div className="">
          <button className="btn" onClick={() => props.setIsopen(true)}>
            <i className="iconly-Paper-Plus fs24"></i>
          </button>
        </div>
      )}
    </div>
  );
};

const List = (props) => {
  const handleOpen = (e) => {
    const dIndex = e.currentTarget.getAttribute("data-key");
    const id = e.currentTarget.getAttribute("data-id");
    props.setCurrentKey(dIndex);
    props.setCurrentId(id);
    props.setModalShow(true);
  };
  const handleDelete = (e) => {
    // const dIndex = e.currentTarget.getAttribute("data-key");
    const id = e.currentTarget.getAttribute("data-id");
    axios.delete(url + "/" + id);
    // props.setCurrentKey(dIndex);
    // props.setCurrentId(id);
    // props.setModalShow(true);
  };
  function removeHtmlTags(text) {
    var cleanText = text.replace(/<.*?>/g, "");
    return cleanText;
  }

  return (
    <div>
      <div className="product-inline mb-2">
        <div
          className="col-10 text-truncate"
          style={{ cursor: "pointer", paddingRight: ".5em" }}
          onClick={handleOpen}
          data-id={props.id}
          data-key={props.pass}
        >
          {removeHtmlTags(props.text)}
        </div>
        <div className="actions col-2">
          <button
            className="btn btn-danger w-100"
            data-id={props.id}
            data-key={props.pass}
            onClick={handleDelete}
          >
            <i className="icli iconly-Delete" style={{ fontSize: 20 }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Notepad = () => {
  const [value, setValue] = useState("");
  const [currentKey, setCurrentKey] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [inputKey, setInputKey] = useState("");
  const [dataArray, setDataArray] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleChange = (e) => {
    console.log(e);
    setValue(() => e);
  };
  //
  const handleSave = () => {
    console.log("Saving" + value);
    if (value.length > 3) {
      // const title = str.length <= 15 ? str : str.substring(0, 15);

      const saveKey = prompt("Enter save key:");

      // Check if the user entered a value
      if (saveKey === null || saveKey === "") return false;
      axios
        .post(url, {
          text: value,
          key: saveKey,
        })
        .then((res) => {
          console.log(res);
          alert("saved");
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });
    } else {
      return false;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        handleSave();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    axios.get(url).then((res) => {
      console.log(res);
      setDataArray(res.data.data);
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <h1 className="text-center mt-1 mb-3">Notepad</h1>
      <Toolbar handleSave={handleSave} isOpen={isOpen} setIsopen={setIsopen} />
      {isOpen ? (
        <>
          <ReactQuill
            theme="snow"
            className="my_quill"
            value={value}
            onChange={handleChange}
          />
        </>
      ) : dataArray ? (
        dataArray.map((item, index) => {
          return (
            <List
              key={index}
              id={item._id}
              pass={item.key}
              text={item.text}
              openKey={item.key}
              setCurrentId={setCurrentId}
              setCurrentKey={setCurrentKey}
              setModalShow={setModalShow}
            />
          );
        })
      ) : (
        <div className="center text-center">
          <h4>Loading ...</h4>
        </div>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        inputKey={inputKey}
        data={dataArray}
        setValue={setValue}
        currentKey={currentKey}
        currentId={currentId}
        setIsopen={setIsopen}
        setInputKey={setInputKey}
      />
    </div>
  );
};

export default Notepad;
