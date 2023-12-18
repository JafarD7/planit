import React, { useState } from 'react'
import { useCart, useDispatchcart } from '../Components/Contextreducer'
import Header2 from '../Components/Header2'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';


export default function cart() {
    let data = useCart();
    let tprice = 0;
    let dispatch = useDispatchcart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleCheckout = async () => {
        let Uemail = "mukesh@gmail.com"
        // let Uemail = localStorage.getItem("userEmail");
        const response = await fetch("http://192.168.0.107:4000/api/addevent", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ eventdata: data, email: Uemail, eventDate: new Date().toDateString() })
        }

        );
        console.log("Order response:", response);
        if (response.status === 200) {
            dispatch({ type: "DROP" });
            setOrderPlaced(true);
        }
    }




    if (data.length === 0) {
        return (
            <div >
                <div>
                    <Header2></Header2>
                </div>
                <div>
                    <section className="vh-100 mt-4" style={{ backgroundColor: "white" }}>
                        <div className="container w-150 h-50">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col">
                                    <p>
                                        <span className="h2">Your wishlist</span>
                                        <span className="h4">(0 item in your wishlist)</span>
                                    </p>
                                    <div className="card mb-5">
                                        <div className="card-body p-4">
                                            <div className="float-start">
                                                <p className="mb-0 me-5 d-flex align-items-center">

                                                    <span className=" me-2">Wishtlist empty</span>
                                                </p>
                                            </div>
                                            <div className="float-end">
                                                <p className="mb-0 me-5 d-flex align-items-center">

                                                    <span className="small text-muted me-2">Order total:</span>
                                                    <span className="lead fw-normal">0rs</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <button type="button" className="btn btn-light btn-lg me-2">
                                                Continue PLANNING
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {orderPlaced ? (
                                <div>
                                    <div className="alert alert mt-4" role="alert" style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}>
                                        Congratulations! Your event has been booked succesfully!
                                    </div>
                                    <div className="alert alert-info mt-4" role="alert" style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}>
                                        Note: Our team will contact you as soon as possible for any further update, event venue will be selected based on your selected area and Plan! If you need any further assistance feel free to contact Us!
                                    </div>
                                </div>
                            ) : null}

                        </div>
                    </section>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }





    return (
        <div>
            <div>
                <Header2></Header2>
            </div>


            <section className="bg-light py-5" style={{ backgroundColor: "white" }}>
                <div className="container w-150 h-50">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <p>
                                <span className="h2">Your wishlist</span>
                                <span className="h4">({data.length} item in your wishlist)</span>
                            </p>
                            {data && data.map((event, index) => {

                                tprice += event.price;

                                return (


                                    <div key={event.name} className="card mb-4">
                                        <div className="card-body p-4 rounded" style={{ backgroundColor: "#EDE4FF" }}>
                                            <div className="row align-items-center">
                                                <div className="col-md-2 col-sm-3 col-6">
                                                    <img
                                                        src={event.img}
                                                        className="img-thumbnail"
                                                        alt={event.name}
                                                    />
                                                </div>
                                                <div className="col-md-10 col-sm-9 col-6">
                                                    <div className="row">
                                                        <div className="col-md-4 col-sm-6 col-12">
                                                            <p className="small text mb-2 pb-2">Name:</p>
                                                            <p className="lead fs-small mb-0">{event.name}</p>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-12">
                                                            <p className="small text mb-2 pb-2">Date:</p>
                                                            <p className="lead fs-small mb-0">{event.date}</p>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-12">
                                                            <p className="small text mb-2 pb-2">Theme:</p>
                                                            <p className="lead fs-small mb-0">{event.themes}</p>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-12">
                                                            <p className="small text mb-2 pb-2">Guests:</p>
                                                            <p className="lead fs-small mb-0">{event.guests}</p>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-12">
                                                            <p className="small text mb-2 pb-2">Area:</p>
                                                            <p className="lead fs-small mb-0">{event.area}</p>
                                                        </div>
                                                        <div className="col-md-4 col-sm-6 col-12">
                                                            <p className="small text mb-2 pb-2">TotalPrice:</p>
                                                            <p className="lead fs-small mb-0">{event.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6 col-12">
                                                        <button
                                                            className="btn btn-outline-dark bg-danger mt-2"
                                                            type="button"
                                                            onClick={() => dispatch({ type: "REMOVE", index: index })}
                                                        >
                                                            <i className="bi-cart-fill me-1" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}




                            <div className="card mb-5">
                                <div className="card-body p-4">
                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small text-muted me-2">Order total:</span>{" "}
                                            <span className="lead fw-normal">{tprice}rs</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <button type="button" className="btn btn-light btn-lg me-2">
                                        Continue shopping
                                    </button>
                                </Link>
                                <button
                                    className="btn btn-outline-dark"
                                    type="submit"
                                    style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}
                                    onClick={handleCheckout}
                                >
                                    <i className="bi-cart-fill me-1" />
                                    CheckOut
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>

    )
}
