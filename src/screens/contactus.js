import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'

export default function contactus() {
    return (
        <div>
            <div><Header2></Header2></div>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="display-4 fw-bold">Contact <img
                                className="rounded img-fluid"
                                src={require("../images/logoP.png")}
                                alt="logo"
                                style={{ border: "3px solid #E095FC", height: "1.35cm", width: "2.15cm" }}
                            /></h2>
                            <p className="lead">
                                We'd love to hear from you!
                            </p>
                            <p>
                                Whether you have questions about our services, want to discuss your upcoming event, or simply want to say hello, our team is here to assist you.
                            </p>
                            <p>
                                Feel free to reach out to us through the following methods:
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-geo-alt fs-5 text-primary me-2"></i>
                                    <span className="fw-bold">Address:</span> Sies College Of Arts, Science & Commerce, SIES Ln, Sion West, Sion, Mumbai, Maharashtra 400022
                                </li>
                                <li>
                                    <i className="bi bi-telephone fs-5 text-primary me-2"></i>
                                    <span className="fw-bold">Phone:</span> +911234567890
                                </li>
                                <li>
                                    <i className="bi bi-envelope fs-5 text-primary me-2"></i>
                                    <span className="fw-bold">Email:</span> info@planit-events.com
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src={require("../images/logo.png")}
                                alt="About PLANit"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="display-4 fw-bold">Get in Touch</h2>
                            <p className="lead">
                                We're here to assist you with your event planning needs.
                            </p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5"></textarea>
                                </div>
                                <button
                                    className="btn btn-outline-dark"
                                    type="submit"
                                    style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}
                                >
                                    <i className="bi-cart-fill me-1" />
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 fw-bold">Visit Us</h2>
                            <p className="lead">
                                We'd love to meet you in person.
                            </p>
                            <p>
                                Our office is located in a convenient and central location. You can use the map above to find directions to our office.
                            </p>
                            <p>
                                Plan a visit, and let's discuss how we can make your event extraordinary!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

