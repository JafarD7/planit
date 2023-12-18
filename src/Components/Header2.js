
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import { useCart } from "./Contextreducer";

export default function Header2() {
    const navigate = useNavigate();

    const [showConfirmation, setShowConfirmation] = useState(false);
    let data = useCart();
    const handleLogout = () => {
        // Display the confirmation modal
        setShowConfirmation(true);
    };

    const confirmLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
        // Implement your logout logic here
        // For example, you can clear user session, state, or perform any necessary cleanup
        // After logout, you can redirect the user to the login page or any other appropriate action
        // For now, let's simulate a page reload as an example
        window.location.reload(); // Simulate a page reload
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}>
                <img
                    className="rounded img-fluid"
                    src={require("../images/logoP.png")}
                    alt="logo"
                    style={{ border: "5px solid #D679F9", height: "2cm", width: "3.15cm" }}
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/reviews">
                                Reviews
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/aboutus">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/contactus">
                                Contact Us
                            </Link>

                        </li>
                        <li>
                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/crpolicy">
                                Cancellation policy
                            </Link>

                        </li>
                    </ul>
                    <div className="d-flex ms-auto">
                        <Link className="btn bg-white" style={{ "color": "#660066", "marginRight": "10px" }} aria-current="page" to="/chatbot">
                            <img
                                className="rounded img-fluid"
                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-7494618-6511556.png?f=webp&w=512"
                                alt="Chat bot"
                                style={{ height: "1cm", width: "1cm" }}
                            />
                        </Link>
                        <Link className="btn bg-white" style={{ "color": "#660066", "marginRight": "10px" }} aria-current="page" to="/cart">
                            <img
                                className="rounded img-fluid"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-wishlist-35-288011.png?f=webp&w=512"
                                alt="Wishlist"
                                style={{ height: "1cm", width: "1cm" }}
                            />
                            {
                                data.length > 0 ? (
                                    <Badge pill bg="black"> {data.length} </Badge>
                                )
                                    : <div></div>
                            }

                        </Link>
                        <Dropdown style={{ marginRight: "10px" }}>
                            <Dropdown.Toggle variant="white" id="dropdown-no-caret" style={{ background: "white" }}>
                                <img
                                    className="rounded img-fluid"
                                    src="https://cdn.iconscout.com/icon/free/png-256/free-user-avatar-contact-portfolio-personal-portrait-profile-4-5447.png?f=webp&w=512"
                                    alt="Profile"
                                    style={{ height: "1cm", width: "1cm" }}
                                />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/profile">My profile</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/myevents">My events</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout} style={{ color: "red" }}>LogOut</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
            <Modal show={showConfirmation} onHide={closeConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to log out?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeConfirmation}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmLogout}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
