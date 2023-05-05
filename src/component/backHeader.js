import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackHeader = ({ title }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? "darkHeader" : ""}>
      <div className="back-links">
        <Link to={-1}>
          <i className="iconly-Arrow-Left icli"></i>
          <div className="content">
            <h2>{title}</h2>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default BackHeader;
