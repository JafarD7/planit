import React, { useEffect, useState } from "react";
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';
import { Planitlink } from '../App.js';

export default function Profile() {
    const [userData, setUserData] = useState(null);

    const loaddata = async () => {
        const Uemail = localStorage.getItem("userEmail");
        try {
            const response = await fetch("/api/Euser", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: Uemail }) // Use the user's email from local storage
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data); // Store the user data in state
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("An error occurred while fetching user data: " + error);
        }
    }

    useEffect(() => {
        loaddata();
    }, []);

    return (
        <div>
            <Header2 />
            <section className="bg-light py-5">
                <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                    <div className="card p-4" style={{ background: 'linear-gradient(to right, #BF3EEF, #FF5733)' }}>
                        <div className="image d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-secondary">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU" height={100} alt="no img" width={100} />
                            </button>
                            {userData ? (
                                <div>
                                    <h1 className="name mt-3">{userData.name}</h1>
                                    <span className="idd">{userData.email}</span>
                                    <span className="idd">{userData.phoneNumber}</span>
                                    {/* Add other user data fields here */}
                                </div>
                            ) : (
                                <p>Loading user data...</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
