import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start text-muted mt-3" style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}>
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            {/* Grid row */}
            <div className="row mt-3">

              <div className="col-12 col-lg-3 col-sm-12 mb-2">

                <div
                  target="_blank"
                  className="text-white h2"
                >
                  <u>PLANit</u>
                </div>
                <p className="mt-1 text-white">© 2023 Copyright: PLANit.in</p>
              </div>


              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-white fw-bold mb-2">Store</h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <Link className="text-white" to="/aboutus">
                      About us
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="text-white" to="#">
                      Find store
                    </Link>
                  </li> */}
                  <li>
                    <Link className="text-white" to="#">
                      Categories
                    </Link>
                  </li>
                </ul>
              </div>


              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Social Media
                </h6>
                <ul className="list-unstyled mb-4">
                  <li className="mx-4">
                    <Link className="btn " style={{ "color": "#660066" }} aria-current="page" to="www.instagram.com">
                      <img
                        className="rounded img-fluid"
                        src="https://cdn.iconscout.com/icon/free/png-256/free-social-137-95498.png?f=webp&w=512"
                        alt="instagram"
                        style={{ height: "0.5cm", width: "0.5cm" }}
                      />
                    </Link>
                  </li>
                  <li className="mx-4">
                    <Link className="btn " style={{ "color": "#660066" }} aria-current="page" to="www.instagram.com">
                      <img
                        className="rounded img-fluid"
                        src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-266-893502.png?f=webp&w=512"
                        alt="Wishlist"
                        style={{ height: "0.5cm", width: "0.5cm" }}
                      />
                    </Link>
                  </li>
                  <li className="mx-4">
                    <Link className="btn " style={{ "color": "#660066" }} aria-current="page" to="www.instagram.com">
                      <img
                        className="rounded img-fluid"
                        src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-292-893504.png?f=webp&w=512"
                        alt="Wishlist"
                        style={{ height: "0.5cm", width: "0.5cm" }}
                      />
                    </Link>
                  </li>

                </ul>
              </div>


              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">Support</h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <Link className="text-white" to="/chatbot">
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/crpolicy">
                      Cancellation & Refund policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/myevents">
                      My events
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-lg-3">
                <h6 className="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
                <p className="text-white">
                  Stay in touch with latest updates about our products and offers
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control border"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-light border shadow-0"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

    </div>
  );
}
