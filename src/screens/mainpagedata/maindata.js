import React from 'react'
import "./index3.css";
import Footer from '../../Components/Footer';
export default function maindata() {
    return (
        <div>
            <section className="hero">
                <div className="hero-responsive">
                    <img src={require('./img1.png')} width="100%" height="auto" alt="no" />
                </div>
                <div className="hero-content">
                    <h1>
                        Try Celebrating <br />
                        with us!
                    </h1>
                    <h2>"Elevate Your Events - Seamless Planning, Spectacular Results"</h2>
                    <h3>Count me in!</h3>
                </div>
            </section>
            {/* <!--End of Hero Section--> */}

            {/* <!--Reason Section--> */}
            <section className="reasons">
                <h1>Why to trust us....</h1>
                <div className="reasonscontent">
                    <div className="rowflex">
                        <b>Why to trust us:</b><br />
                        Discover our expertise in handling various types of events, from
                        corporate conferences and weddings to community festivals and charity
                        galas.
                    </div>
                    <div className="rowflex">
                        <b>Experience:</b><br />
                        We have a proven track record of successfully organizing and managing
                        a wide range of events. Our experience ensures that we understand the
                        intricacies of event planning and can handle any challenges that may
                        arise.
                    </div>
                    <div className="rowflex">
                        <b>Event Diversity:</b><br />
                        Discover our expertise in handling various types of events, from
                        corporate conferences and weddings to community festivals and charity
                        galas.
                    </div>
                    <div className="rowflex">
                        <b>Professionalism:</b><br />
                        We take our work seriously and maintain the highest level of
                        professionalism in all aspects of event management. From communication
                        to execution, you can expect a smooth and efficient process.
                    </div>
                </div>
            </section>
            {/* <!-- End of reasons section --> */}

            {/* <!-- Speakers Section --> */}
            <section className="Speakers">
                <h2>SPEAKERS</h2>
                <div className="speakerscontent">
                    <div className="speaker">
                        <img src={require('./speaker1.jpg')} style={{ height: 452 }} alt="no" />
                        <h4>
                            <i
                            >"I couldn't have asked for a better team to handle my wedding.
                                From the first meeting to the last dance, they were attentive,
                                creative, and organized. They took my vision and turned it into a
                                fairytale reality. Thank you for making our special day truly
                                magical!" - Sarah H.</i
                            >
                        </h4>
                    </div>
                    <div className="speaker">
                        <img src={require('./speaker2.jpg')} width="100%" height="auto" alt="no" />
                        <h4>
                            <i
                            >"Our company's annual conference was a massive success, all
                                thanks to this incredible event management team. Their attention
                                to detail and ability to handle every aspect of the event with
                                professionalism and ease was impressive. We're looking forward to
                                working with them again!" - John M.</i
                            >
                        </h4>
                    </div>
                    <div className="speaker">
                        <img src={require('./speaker3.jpg')} width="100%" height="auto" alt="no" />
                        <h4>
                            <i
                            >"I had the pleasure of attending a themed party organized by this
                                company, and it was an absolute blast! The attention to detail and
                                commitment to the theme were commendable. The energy and
                                enthusiasm they brought to the event were contagious, making it a
                                night to remember!" - Ejiro Rudo</i
                            >
                        </h4>
                    </div>
                </div>
            </section>
            {/* <!-- End Speakers Section --> */}

            <section className="Expect">
                <h1>What you can expect:</h1>
                <div className="expectcontent">
                    <div className="event">
                        <h3>IN-PERSON EVENTS</h3>
                        We organize in-person events like Weddings and Social Parties,
                        Conferences and Seminars, Concerts, Educational workshops , Marketing
                        Events, etc.
                    </div>
                    <div className="event">
                        <h3>
                            VIRTUAL <br />
                            EVENTS
                        </h3>
                        We organize virtual conferences, webinars, online trade shows, virtual
                        expos, digital concerts, and more.
                    </div>
                    <div className="event">
                        <h3>
                            HYBRID <br />
                            EVENTS
                        </h3>
                        We organize Hybrid Conferences, Hybrid Meetings and workshops, Hybrid
                        Festivals and Concerts, Hybrid Corporate events and many more.
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
