import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'

export default function reviews() {
    return (
        <div><div >
            <div>
                <Header2></Header2>
            </div>
            <div>
                <section className="vh-100 mt-4" style={{ backgroundColor: "white" }}>
                    <div className="container w-150 h-50">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <p>
                                    <span className="h2">Some of our happy Customers!!</span>
                                </p>
                                <div className="card mb-5">
                                    <div className="card-body p-4">
                                        <div className="float-start">
                                            <p className="mb-0 me-5 align-items-center">
                                                <p><b>Rakesh Gupta: Rating: 5/5</b></p>
                                                <p>
                                                    "I had an amazing experience planning my wedding with this service! The team was incredibly helpful and made sure every detail was perfect. Highly recommended!"</p>
                                            </p>
                                            <p className="mb-0 me-5 align-items-center">
                                                <p><b>Mrunal kumari: Rating: 4/5</b></p>
                                                <p>
                                                    "We used this service for our corporate event, and they delivered beyond our expectations. The decorations, catering, and entertainment were top-notch. Will definitely use them again."</p>
                                            </p>
                                            <p className="mb-0 me-5 align-items-center">
                                                <p><b>Siddharth Sharma: Rating: 4.3/5</b></p>
                                                <p>
                                                    "I was stressed about planning my daughter's sweet sixteen party, but this team made it a breeze. They handled everything, and the party turned out fabulous!"</p>
                                            </p>
                                            <p className="mb-0 me-5 align-items-center">
                                                <p><b>Hina sheikh: Rating: 3.9/5</b></p>
                                                <p>
                                                    "I cannot thank this team enough for making my engagement party so special. The personalized touches and attention to detail were outstanding."</p>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div></div>
    )
}
