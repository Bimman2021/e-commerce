import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackHeader = ({ title, subTitle, style, options, optComponent }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? "darkHeader" : ""} style={style}>
      <div className="back-links">
        <Link to={-1}>
          <i className="iconly-Arrow-Left icli"></i>
          <div className="content">
            <h2>{title}</h2>
            {subTitle && <h6>{subTitle}</h6>}
          </div>
        </Link>
      </div>
      {options && (
        <div className="header-option">
          <ul>
            <li>
              <Link to="/wishlist">
                <i className="iconly-Heart icli"></i>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="iconly-Buy icli"></i>
              </Link>
            </li>

            {optComponent && optComponent}
          </ul>
        </div>
      )}
    </header>
  );
};

export default BackHeader;
