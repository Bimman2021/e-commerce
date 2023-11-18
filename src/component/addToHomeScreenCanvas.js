import Offcanvas from "react-bootstrap/Offcanvas";
import logo1 from "../assets/images/logo/logo48.png";

export default function OffCanvasExample({ show, setShow }) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div onClick={handleShow} className="btn me-2">
          <i className="iconly-Delete icli"></i>
          Remove
        </div> */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={true}
        scroll={false}
        className="addtohome-popup"
        placement="bottom"
        style={{
          height: "150px",
        }}
      >
        <Offcanvas.Header closeButton>
          <div className="app-info">
            <img src={logo1} className="img-fluid" alt="" />
            <div className="content">
              <h3>Multikart App</h3>
              <div>www.multikart-app.com</div>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <button className="btn btn-solid install-app" onClick={handleClose}>
              Add to home screen
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
