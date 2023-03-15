import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow ">
        <div className="container-fluid">
          <a className=" navbar-brand fs-1 mx-auto"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WASTE FOOD MANAGEMENT   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
          <p className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/"> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus"> About Us </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/service"> Services </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contactus"> Contact Us </NavLink>
              </li>
            </ul>
            <NavLink to="/login" className="btn btn-secondary ms-auto px-4 rounded-pill">
              <i className="fa fa-sign-in me-2"></i>Login</NavLink>
            <NavLink to="/signup" className="btn btn-outline-secondary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i>Sign Up</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;