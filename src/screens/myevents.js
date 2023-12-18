import React, { Component } from "react";
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';

class MyEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myEvents: [], // Initialize as an empty array
            loading: true,
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/Myevents", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ email: "jafardahod7@gmail.com" }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.eventdata.eventdata);
                this.setState({ myEvents: data.eventdata.eventdata || [], loading: false });

            } else {
                console.error("Failed to fetch data");
                this.setState({ myEvents: [], loading: false });
            }
        } catch (error) {
            console.error("An error occurred while fetching data: " + error);
            this.setState({ myEvents: [], loading: false });
        }
    }

    handleDeleteEvent = async (eventId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/deleteEvent/${eventId}`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ email: "jafardahod7@gmail.com" }),
            });

            if (response.ok) {
                // Update the state to remove the deleted event
                const updatedEvents = this.state.myEvents.filter(event => event[1].id !== eventId);
                this.setState({ myEvents: updatedEvents });
            } else {
                console.error("Failed to delete the event");
            }
        } catch (error) {
            console.error("An error occurred while deleting the event: " + error);
        }
    }
    render() {
        const { myEvents, loading } = this.state;

        if (loading) {
            return (
                <div>
                    <Header2 />
                    <div>
                        <section className="vh-100 mt-4">
                            <div className="container-fluid w-100 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-lg-12 col-xl-10">
                                        <p>Loading...</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            );
        }

        if (myEvents.length === 0) {
            return (
                <div>
                    <Header2 />
                    <div>
                        <section className="vh-100 mt-4">
                            <div className="container-fluid w-100 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-lg-12 col-xl-10">
                                        <p>No data</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            );
        }

        return (
            <div>
                <Header2 />
                <div>
                    <section className="bg-light py-5">
                        <div className="container-fluid w-100 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-lg-12 col-xl-10">
                                    {myEvents.length > 0 ? myEvents.map((event, index) => (
                                        <div className="card" style={{ borderRadius: 10 }} key={index}>
                                            <div className="card" style={{ borderRadius: 10 }} key={index}>
                                                <div className="card-header px-4 py-5">
                                                    <h5 className="">
                                                        Thanks for Choosing,{" "}
                                                        <span style={{ color: "#BF3EEF" }}>PLANit</span>!
                                                    </h5>
                                                </div>
                                                <div className="card-body p-4">
                                                    <div className="card shadow-0 border mb-4">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <img
                                                                        src={event[1].img}
                                                                        className="img-fluid"
                                                                        alt={event[1].name}
                                                                    />
                                                                </div>
                                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                    <p className="">{event[1].name}</p>
                                                                </div>
                                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                    <p className="small">{event[1].themes}</p>
                                                                </div>
                                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                    <p className="small">Guests: {event[1].guests}</p>
                                                                </div>
                                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                    <p className="small">{event[1].area}</p>
                                                                </div>
                                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                                    <p className="small">Luxury</p>
                                                                </div>
                                                            </div>
                                                            <hr
                                                                className="mb-4"
                                                                style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div
                                                    className="card-footer border-0 px-4 py-5"
                                                    style={{
                                                        background: 'linear-gradient(to right, #BF3EEF, #FF5733)',
                                                        borderBottomLeftRadius: 10,
                                                        borderBottomRightRadius: 10
                                                    }}
                                                >
                                                    <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                                                        Total price paid: <span className="h2 mb-0 ms-2">{event[1].price}rs</span>
                                                    </h5>
                                                </div> */}
                                            </div>
                                            <div
                                                className="card-footer border-0 d-flex justify-content-between align-items-center px-4 py-5"
                                                style={{
                                                    background: 'linear-gradient(to right, #BF3EEF, #FF5733)',
                                                    borderBottomLeftRadius: 10,
                                                    borderBottomRightRadius: 10,
                                                }}
                                            >
                                                <h5 className="text-white text-uppercase mb-0">
                                                    Total price paid: <span className="h2 mb-0 ms-2">{event[1].price}rs</span>
                                                </h5>
                                                <button
                                                    className="btn btn-lg btn-outline-dark bg-danger mt-2"
                                                    type="button"
                                                    onClick={() => this.handleDeleteEvent(event[1].id)}
                                                >
                                                    <i className="bi-cart-fill me-1" />
                                                    Delete
                                                </button>

                                            </div>

                                        </div>
                                    )) : <div>No data</div>}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyEvents;


