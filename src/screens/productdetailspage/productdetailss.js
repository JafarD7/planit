import React, { useEffect, useState } from "react";
import Header2 from "../../Components/Header2";
import Footer from "../../Components/Footer";
import { useDispatchcart, useCart } from "../../Components/Contextreducer";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./css/styles.css";

export default function ProductDetails() {
    let dispatch = useDispatchcart();
    const [product, setproduct] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let product_id = queryParams.get("product_id");
    const data = useCart();
    const [selectedPlan, setSelectedPlan] = useState("b");
    const [updatedPrice, setUpdatedPrice] = useState(0);
    const [filteredproduct, setfilteredProduct] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        area: '',
        themes: 'No theme available',
        guests: '',
        additionalChanges: '',
    });
    const [feedbackMessage, setFeedbackMessage] = useState("");


    const loadproduct = async () => {
        let response = await fetch("http://192.168.0.107:4000/api/Eproduct", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        });

        response = await response.json();

        setproduct(response[0]);
    }

    useEffect(() => {
        loadproduct();
    }, []);

    useEffect(() => {
        if (product.length > 0 && product_id) {


            const filteredP = product.find(value => product_id === value._id);
            setfilteredProduct(filteredP || null);
            setUpdatedPrice(filteredproduct.Price);
        }
    }, [product, product_id]);
    const handlePlanChange = (e) => {
        const selectedPlan = e.target.value;
        let newPrice;
        switch (selectedPlan) {
            case "P":
                newPrice = filteredproduct.Price * 2;
                break;
            case "L":
                newPrice = filteredproduct.Price * 3;
                break;
            default:
                newPrice = filteredproduct.Price;
        }
        setSelectedPlan(selectedPlan);
        setUpdatedPrice(newPrice);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.date || !formData.area || !formData.themes || !formData.guests) {
            alert("Please select all the details");

        } else if (data.length >= 3) {
            alert("Wishlist Full - You can't add more than 3 items to your wishlist.");
        }
        else {

            const { date, area, themes, guests, additionalChanges } = formData;

            await dispatch({ type: "ADD", id: filteredproduct._id, img: filteredproduct.img1, name: filteredproduct.name, price: updatedPrice, date: date, area: area, themes: themes, guests: guests, adinfo: additionalChanges });
            setFeedbackMessage("Added to wishlist!");
            setTimeout(() => {
                setFeedbackMessage(""); // Clear the message after a delay
            }, 3000);
        }

    }
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div>
            {filteredproduct ? (
                <>
                    <Header2></Header2>
                    <div key={filteredproduct._id}>
                        <section className="py-5">
                            <div className="container px-4 px-lg-5 my-5">
                                <div className="row gx-4 gx-lg-5 align-items-center">
                                    <div className="col-md-6">
                                        <div
                                            id="carouselExampleFade"
                                            className="carousel slide carousel-fade"
                                            data-bs-ride="carousel"
                                            style={{ maxWidth: "100%" }}
                                        >
                                            <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                                                <div className="carousel-caption" style={{ zIndex: "10" }}>

                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ filter: "brightness(100%)" }}
                                                        width="auto" height="100%"
                                                        src={filteredproduct.img1}
                                                        alt="First slide"
                                                    />
                                                </div>
                                                <div className="carousel-item active">
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ filter: "brightness(100%)" }}
                                                        width="auto" height="100%"
                                                        src={filteredproduct.img2}
                                                        alt="Second slide"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ filter: "brightness(100%)" }}
                                                        width="auto" height="100%"
                                                        src={filteredproduct.img3}
                                                        alt="Third slide"
                                                    />
                                                </div>
                                            </div>
                                            <a
                                                className="carousel-control-prev"
                                                href="#carouselExampleFade"
                                                role="button"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="sr-only"></span>
                                            </a>
                                            <a
                                                className="carousel-control-next"
                                                href="#carouselExampleFade"
                                                role="button"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="display-3 fs-2 fw-bolder mb-3">{filteredproduct.name}</div>
                                        <div>
                                            <div className="fs-5 mb-5">
                                                <span className="text-decoration-line-through me-3">{updatedPrice + 2000}rs</span>
                                                <span ><b defaultValue={filteredproduct.Price}>{updatedPrice}rs</b></span>
                                            </div>
                                            <h1 className="display-5 fs-5 fw-bolder">Description</h1>
                                            <p className="lead">
                                                {filteredproduct.Description}
                                            </p>
                                        </div>
                                        <div className="d-flex" id="details">
                                            <form onSubmit={handleSubmit}>
                                                <div className="d-flex" >
                                                    <div className="me-3">
                                                        <label className="mb-1" htmlFor="date">Date:</label>
                                                        <input type="date" id="date" name="date" className="form-control text-center me-3" value={formData.date} onChange={handleFormChange} />
                                                    </div>
                                                    <div className="me-3">

                                                        <label className="mb-1" htmlFor="Area">Area:</label>
                                                        <select className="form-select me-3" id="Area" name="area" aria-label="Default select example" value={formData.area}
                                                            onChange={handleFormChange}>
                                                            <option value="Thane" >Thane</option>
                                                            <option value="Navi-Mumbai">Navi-Mumbai</option>
                                                            <option value="Borivali">Borivali</option>
                                                            <option value="Dadar">Dadar</option>
                                                            <option value="South-Mumbai">South-Mumbai</option>
                                                            <option value="Andheri">Andheri</option>
                                                            <option value="Kurla">Kurla</option>
                                                            <option value="Ghatkopar">Ghatkopar</option>
                                                            <option value="Mulund">Mulund</option>
                                                            <option value="Kalyan-Dombivili">Kalyan-Dombivili</option>
                                                            <option value="Parel">Parel</option>
                                                            <option value="Bandra">Bandra</option>
                                                            <option value="Nearby my address">Nearby my address</option>
                                                        </select>
                                                    </div>
                                                    <div className="me-3">

                                                        <label className="mb-1" htmlFor="Themes">Themes:</label>
                                                        <select className="form-select" id="Themes" name="themes" aria-label="Default select example" value={formData.themes}
                                                            onChange={handleFormChange}>
                                                            {
                                                                filteredproduct.Themes && filteredproduct.Themes[0] !== "No themes available" ? (
                                                                    filteredproduct.Themes.map(item => (

                                                                        <option key={item} value={item}>{item}</option>


                                                                    ))
                                                                ) : <option></option>
                                                            }

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="me-3">

                                                        <label className="mb-1" htmlFor="guests">Guests: </label>
                                                        <select className="form-select" id="guests" name="guests" aria-label="Default select example" value={formData.guests}
                                                            onChange={handleFormChange}>
                                                            <option value="1-50">1-50</option>
                                                            <option value="50-100">50-100</option>
                                                            <option value="100-300">100-300</option>
                                                            <option value="300-500">300-500</option>
                                                            <option value="500-1000">500-1000</option>
                                                            <option value="1000+">1000+</option>
                                                        </select>
                                                    </div>
                                                    <div className="me-3">

                                                        <label className="mb-1" htmlFor="cat">Your Plan:</label>
                                                        <select
                                                            className="form-select"
                                                            id="cat"
                                                            name="cat"
                                                            aria-label="Default select example"
                                                            value={selectedPlan}
                                                            onChange={handlePlanChange}
                                                        >
                                                            <option value="b">Basic</option>
                                                            <option value="P">Premium</option>
                                                            <option value="L">Luxury</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-outline">
                                                        <label htmlFor="additionalchanges">Any additional neeeds:</label>
                                                        <textarea className="form-control" id="additionalchanges" name="additionalChanges" rows="1" value={formData.additionalChanges}
                                                            onChange={handleFormChange}></textarea>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-outline-dark mt-3 flex-shrink-0"
                                                    type="submit"
                                                    style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}
                                                >
                                                    <i className="bi-cart-fill me-1" />
                                                    Add to wishlist
                                                </button>
                                                {feedbackMessage && (
                                                    <div className="alert alert-success mt-3">{feedbackMessage}</div>
                                                )}
                                            </form>
                                        </div>
                                        <div className="mt-3">
                                            <h4 className="display-3 fs-2 fw-bolder">What to expect</h4>
                                            <p className="lead">
                                                {filteredproduct.WTE}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer></Footer>
                </>
            ) : (
                <div key="no-data"></div>
            )
            }
        </div >
    );
}
