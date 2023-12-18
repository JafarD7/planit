import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer';


export default function Login(props) {
  const [userdata, setuserdata] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://192.168.0.107:4000/api/Loginuser", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: userdata.email, password: userdata.password })
    });
    const json = await response.json()
    // console.log(json);

    if (!json.success) {
      alert("Enter Valid credentials")
    }
    if (json.success) {
      localStorage.setItem("userEmail", userdata.email);
      props.onLogin(userdata.email, userdata.password);
    }

  }
  const onchangevalue = (event) => {
    setuserdata({ ...userdata, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <Header></Header>
      <section className="bg-light py-5" style={{ backgroundColor: "#A076F9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.pexels.com/photos/6787850/pexels-photo-6787850.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">
                            <img
                              className="rounded img-fluid"
                              src={require("../images/logoP.png")}
                              alt="logo"
                              style={{ height: "1.2cm", width: "2cm" }}
                            />
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Please Login to access your Account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example3"
                            className="form-control form-control-lg"
                            name="email"
                            onChange={onchangevalue}
                            value={userdata.email}
                          />
                          <label className="form-label" htmlFor="form2Example3">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example4"
                            className="form-control form-control-lg"
                            name="password"
                            onChange={onchangevalue}
                            value={userdata.password}
                          />
                          <label className="form-label" htmlFor="form2Example4">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <Link className="small text-muted" to="#!">
                          Forgot password?
                        </Link>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/Signup" style={{ color: "#393f81" }}>
                            Sign UP
                          </Link>
                        </p>
                        <Link to="#!" className="small text-muted">
                          Terms of use.
                        </Link>
                        <Link to="#!" className="small text-muted">
                          Privacy policy
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
