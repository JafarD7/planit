import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from "./screens/Login";
import Signup from "./screens/signup";
import Home from "./screens/home";
import Info from "./screens/main";
import Gallery from "./screens/gallery";
import Cart from "./screens/cart";
import Productdetails from "./screens/productdetailspage/productdetailss";
import Profile from "./screens/profile";
import Chatbot from "./screens/chatbot";
import Reviews from "./screens/reviews";
import Contactus from "./screens/contactus";
import Aboutus from "./screens/aboutus";
import Crpolicy from "./screens/crpolicy";
import Myevents from "./screens/myevents";
import Custom from "./screens/custom";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Cartprovider } from "./Components/Contextreducer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);



  const handleLogin = async (email, password) => {
    try {

      const response = await fetch("http://192.168.0.107:4000/api/Loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();


        if (data.success) {

          console.log(localStorage.getItem("authToken"));
          localStorage.setItem("authToken", data.authToken);



          setIsLoggedIn(true);
        } else {

          console.error("Authentication failed");
        }
      } else {

        console.error("Login request failed");
      }
    } catch (error) {

      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  const PrivateRoute = ({ element, ...rest }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  return (
    <Cartprovider>

      <Router>
        <div>
          <Routes>
            {/* The "/" route is accessible without authentication */}
            <Route path="/" element={<Info />} />
            {/* All other routes require authentication */}
            <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/home" element={<PrivateRoute element={<Home onLogout={handleLogout} />} />} />
            <Route path="/gallery" element={<Gallery></Gallery>} />
            <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="/chatbot" element={<PrivateRoute element={<Chatbot />} />} />
            <Route path="/reviews" element={<PrivateRoute element={<Reviews />} />} />
            <Route path="/contactus" element={<PrivateRoute element={<Contactus />} />} />
            <Route path="/aboutus" element={<PrivateRoute element={<Aboutus />} />} />
            <Route path="/crpolicy" element={<PrivateRoute element={<Crpolicy />} />} />
            <Route path="/myevents" element={<PrivateRoute element={<Myevents />} />} />
            <Route path="/custom" element={<PrivateRoute element={<Custom></Custom>} />} />
            <Route path="/product-details" element={<PrivateRoute element={<Productdetails />} />} />
          </Routes>
        </div>
      </Router>
    </Cartprovider>
  );
}

export default App;
