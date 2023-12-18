import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Gallery() {
    return (
        <div>
            <Header></Header>
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="display-4 fw-bold text-center">Gallery</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://midaasevents.co.in/storage/package/8EWOkg1J8bxm14IklBRZPBFoPTMxoCOG6i4yi0F0.jpg"
                                    className="card-img-top"
                                    alt="Event 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Theme Decoration for Birthday Parties</h5>
                                    <p className="card-text">We have created a custom Spiderman-themed decoration package that fits your specific needs and budget. It is inclusive of customized backdrop with cutouts, lights, balloon decorations and eye-catching theme balloon entrance .Contact us to discuss your ideas and let us create an exciting and thrilling Spiderman theme decoration experience for your special occasion</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://midaasevents.co.in/storage/package/nwendyihiaopkoaq2E8Gor3oAr9UPvB0ih2iYAHH.png"
                                    className="card-img-top"
                                    alt="Event 2"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Majestic Ganpati Decorations at Home</h5>
                                    <p className="card-text">Ganpati Bappa Morya!!!!! Bappa is on his way, so we need to be ready to invite him whole heartedly. and the arrangements starts from the Decorations. So PLANit is set for the decorations for the most loved festival of almighty Bappa. Book your Decorations now!!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src="https://www.aurusjewels.com/cdn/shop/articles/indian_wedding_planning_guide_ultimate.jpg?v=1679913681"
                                    className="card-img-top"
                                    alt="Event 3"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Grand Indian Wedding</h5>
                                    <p className="card-text">A Grand Indian Wedding is a magnificent and unforgettable celebration that combines tradition, luxury, and love on a grand scale. It's a testament to the rich cultural heritage of India and an expression of the couple's love story in the most opulent and beautiful way possible.</p>
                                </div>
                            </div>
                        </div>
                        {/* Add more gallery items as needed */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
