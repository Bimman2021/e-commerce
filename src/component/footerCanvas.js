import Offcanvas from "react-bootstrap/Offcanvas";

export default function FooterCanvas({
  show,
  setShow,
  addToWishList,
  remove,
  component,
}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav-bar" onClick={handleShow}></div>

      <Offcanvas
        className="removecart-canvas h-auto"
        show={show}
        placement="bottom"
        onHide={handleClose}
      >
        <Offcanvas.Body className="small">{component}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
