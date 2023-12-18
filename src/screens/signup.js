import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
export default function signup() {
  const [userdata, setuserdata] = useState({ name: "", email: "", password: "", confirmPassword: "", phonenumber: "" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://192.168.0.107:4000/api/Signupuser", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: userdata.name, email: userdata.email, phonenumber: userdata.phonenumber, password: userdata.password })
    });
    const json = await response.json()
    console.log(json);

    if (userdata.password !== userdata.confirmPassword) {
      alert("Please enter the confirm password correctly!")
    }
    else {

      if (!json.success) {
        alert("Enter Valid credentials")
      }
      if (json.success) {
        navigate("/login")
      }
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
                      src="https://images.pexels.com/photos/5971184/pexels-photo-5971184.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                          Create a PLANit account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example1"
                            className="form-control form-control-lg"
                            name="name"
                            onChange={onchangevalue}
                            value={userdata.name}
                          />
                          <label className="form-label" htmlFor="form2Example1">
                            Enter Your Name
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="number"
                            id="form2Example2"
                            className="form-control form-control-lg"
                            name="phonenumber"
                            onChange={onchangevalue}
                            value={userdata.phonenumber}
                          />
                          <label className="form-label" htmlFor="form2Example2">
                            Enter Your Phone number
                          </label>
                        </div>
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
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example5"
                            className="form-control form-control-lg"
                            name="confirmPassword"
                            onChange={onchangevalue}
                            value={userdata.confirmPassword}
                          />
                          <label className="form-label" htmlFor="form2Example5">
                            Confirm Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: "#393f81" }}>
                            Login
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
