import React from "react";
import { useNavigate } from "react-router-dom";

const Searchs = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="search-panel w-back pt-3 px-15">
        <button onClick={() => navigator(-1)} className="back-btn border-0">
          <i className="iconly-Arrow-Left icli"></i>
        </button>
        <div className="search-bar">
          <input
            type="search"
            className="form-control form-theme"
            placeholder="Search"
          />
          <i className="iconly-Search icli search-icon"></i>
          <i className="iconly-Camera icli camera-icon"></i>
        </div>
      </div>
    </>
  );
};

export default Searchs;
