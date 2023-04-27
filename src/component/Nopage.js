import { Link } from "react-router-dom";

const Nopage = () => {
  return (
    <div className="main-layout card-bg-1">
      <div className="container d-flex flex-column">
        <div className="row text-center align-items-center justify-content-center min-vh-100">
          <main>
            <h1
              style={{
                fontSize: "4.5rem",
                color: "#fff",
                letterSpacing: ".2rem",
              }}
            >
              404
            </h1>
            <p style={{ fontSize: "1rem", marginBottom: "1em" }}>
              No page found
            </p>
            <Link className="txtColorC mt-3 d-block" to={"/"}>
              <span className="my-btn m-fill ">Home</span>
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Nopage;
