import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}>
        <img
          className="rounded img-fluid"
          src={require("../images/logoP.png")}
          alt="logo"
          style={{ border: "5px solid #D679F9", height: "2cm", width: "3.15cm" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">

            <Link className="btn bg-white mx-1" style={{ "color": "#660066", "width": "75px" }} aria-current="page" to="/gallery">
              Gallery
            </Link>
            <Link className="btn bg-white mx-1 " style={{ "color": "#660066", "width": "75px" }} aria-current="page" to="/login">
              Login
            </Link>
            <Link className="btn bg-white mx-1" style={{ "color": "#660066", "width": "75px" }} aria-current="page" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

