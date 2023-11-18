import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <div className="bottom-panel">
      <ul>
        <li>
          <NavLink end to="/">
            <div className="icon">
              <i className="iconly-Home icli"></i>
              <i className="iconly-Home icbo"></i>
            </div>
            <span>home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category">
            <div className="icon">
              <i className="iconly-Category icli"></i>
              <i className="iconly-Category icbo"></i>
            </div>
            <span>category</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <div className="icon">
              <i className="iconly-Buy icli"></i>
              <i className="iconly-Buy icbo"></i>
            </div>
            <span>cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">
            <div className="icon">
              <i className="iconly-Heart icli"></i>
              <i className="iconly-Heart icbo"></i>
            </div>
            <span>wishlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={isLogin ? "/profile" : "/signin"}>
            <div className="icon">
              <i className="iconly-Profile icli"></i>
              <i className="iconly-Profile icbo"></i>
            </div>
            <span>profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
    // <div className="bottom-panel">
    //   <ul>
    //     <li className={activeNavLink === "/" ? "active" : ""}>
    //       <NavLink exact onClick={() => setActiveNavLink("/")} to="/">
    //         <div className="icon">
    //           <i className="iconly-Home icli"></i>
    //           <i className="iconly-Home icbo"></i>
    //         </div>
    //         <span>home</span>
    //       </NavLink>
    //     </li>
    //     <li className={activeNavLink === "/category" ? "active" : ""}>
    //       <NavLink onClick={() => setActiveNavLink("/category")} to="/category">
    //         <div className="icon">
    //           <i className="iconly-Category icli"></i>
    //           <i className="iconly-Category icbo"></i>
    //         </div>
    //         <span>category</span>
    //       </NavLink>
    //     </li>
    //     <li className={activeNavLink === "/cart" ? "active" : ""}>
    //       <NavLink onClick={() => setActiveNavLink("/cart")} to="/cart">
    //         <div className="icon">
    //           <i className="iconly-Buy icli"></i>
    //           <i className="iconly-Buy icbo"></i>
    //         </div>
    //         <span>cart</span>
    //       </NavLink>
    //     </li>
    //     <li className={activeNavLink === "/wishlist" ? "active" : ""}>
    //       <NavLink onClick={() => setActiveNavLink("/wishlist")} to="/wishlist">
    //         <div className="icon">
    //           <i className="iconly-Heart icli"></i>
    //           <i className="iconly-Heart icbo"></i>
    //         </div>
    //         <span>wishlist</span>
    //       </NavLink>
    //     </li>
    //     <li className={activeNavLink === "/profile" ? "active" : ""}>
    //       <NavLink
    //         onClick={() => setActiveNavLink("/profile")}
    //         to={isLogin ? "/profile" : "/signin"}
    //       >
    //         <div className="icon">
    //           <i className="iconly-Profile icli"></i>
    //           <i className="iconly-Profile icbo"></i>
    //         </div>
    //         <span>profile</span>
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Navbar;
