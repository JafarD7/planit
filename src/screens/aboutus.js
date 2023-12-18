import React from 'react';
import Footer from '../Components/Footer';
import Header2 from '../Components/Header2';

export default function aboutus() {
    return (
        <div>
            <div>
                <Header2></Header2>
            </div>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="display-4 fw-bold">About PLANit</h2>
                            <p className="lead">
                                At PLANit, we specialize in creating unforgettable moments that leave lasting memories.
                            </p>
                            <p>
                                Our mission is to transform your vision into reality. Whether you're planning a wedding, corporate event, birthday party, or any special occasion, we're here to make it extraordinary.
                            </p>
                            <p>
                                With years of experience in event planning, our dedicated team of professionals understands the importance of every detail. We work tirelessly to ensure that your event is a reflection of your style and preferences, exceeding your expectations.
                            </p>
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
                            <img
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Our Team"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 fw-bold">Meet Our Team</h2>
                            <p className="lead">
                                Behind every successful event is a passionate and dedicated team.
                            </p>
                            <p>
                                Our team at PLANit is composed of experienced event planners, designers, and coordinators who are committed to bringing your vision to life. We pride ourselves on our creativity, attention to detail, and professionalism.
                            </p>
                            <p>
                                From the initial consultation to the final execution, we work closely with you to understand your needs and preferences. Together, we'll craft an event that reflects your personality and exceeds your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="display-4 fw-bold">Why Choose PLANit?</h2>
                            <p className="lead">
                                Discover what sets us apart from the rest.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-4">
                                <i className="bi bi-check-circle fs-4 text-primary mb-3"></i>
                                <h4 className="fw-bold">Experience</h4>
                                <p>
                                    With years of experience in event planning, we have the expertise to make your event a success.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-4">
                                <i className="bi bi-gem fs-4 text-primary mb-3"></i>
                                <h4 className="fw-bold">Creativity</h4>
                                <p>
                                    Our team's creative flair ensures that your event is unique and tailored to your preferences.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-4">
                                <i className="bi bi-heart fs-4 text-primary mb-3"></i>
                                <h4 className="fw-bold">Passion</h4>
                                <p>
                                    We're passionate about what we do and committed to making your event a memorable one.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

