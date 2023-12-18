import React, { useState } from 'react';
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';

export default function custom() {
    const [formData, setFormData] = useState({
        eventName: '',
        eventType: '',
        address: '',
        date: '',
        guests: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any actions with the form data here, such as sending it to a server.
        console.log(formData);
        // Reset the form fields
        setFormData({
            eventName: '',
            eventType: '',
            address: '',
            date: '',
            guests: '',
            description: '',
        });
    };

    return (
        <div>
            <Header2></Header2>
            <div className="container">
                <h2 className="my-4">Custom Event Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="eventName" className="form-label">
                            Event Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventName"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="eventType" className="form-label">
                            Event Type
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="guests" className="form-label">
                            Number of Guests
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Additional Description
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>
                    <button
                        className="btn btn-outline-dark"
                        type="submit"
                        style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}
                    // onClick={handleCheckout}
                    >
                        <i className="bi-cart-fill me-1" />
                        Submit
                    </button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}
