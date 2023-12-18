import React, { useEffect, useState } from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
// import "./Home.css"; // Import your responsive CSS

export default function Home() {

  const [search, setsearch] = useState('');
  const [eventcat, seteventcat] = useState([]);
  const [eventitems, seteventitems] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://192.168.0.107:4000/api/Edata", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      }
    });

    response = await response.json();

    seteventcat(response[1]);
    seteventitems(response[0]);
  }

  useEffect(() => {
    loaddata();
  }, []);

  const filteredItemsByCategory = eventcat.reduce((acc, category) => {
    const filteredItems = eventitems.filter((item) => {
      return (
        (item.name.toLowerCase().includes(search.toLowerCase()) ||
          category.CategoryName.toLowerCase().includes(search.toLowerCase())) &&
        item.CategoryName === category.CategoryName
      );
    });

    if (filteredItems.length > 0) {
      acc[category.CategoryName] = filteredItems;
    }

    return acc;
  }, {});
  const lastEventItem = eventitems.length > 0 ? eventitems[eventitems.length - 1] : {
    name: "No matching items",
    img: "", // Provide a default image source
    _id: null, // Provide a default ID or use a placeholder value
  };

  return (
    <div>

      <Header2 />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ maxWidth: "100%", overflow: "hidden" }}
      >
        <div
          className="carousel-inner"
          style={{
            maxWidth: "100%",
            height: "500px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block mx-auto"
              style={{ width: "1828px", height: "685px", objectFit: "cover", filter: "brightness(100%)" }}
              src={require("../images/Carousal/one.jpg")}
              alt="First slide"
            />
          </div>

          <div className="carousel-item active">
            <img
              className="d-block mx-auto"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              src={require("../images/Carousal/two.jpg")}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block mx-auto"
              style={{ width: "1828px", height: "685px", objectFit: "cover", filter: "brightness(100%)" }}
              src={require("../images/Carousal/three.jpg")}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src={require("../images/Carousal/four.jpg")}
              alt="fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src={require("../images/Carousal/five.jpg")}
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src={require("../images/Carousal/six.jpg")}
              alt="Sixth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src={require("../images/Carousal/seven.jpg")}
              alt="Seventh slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src={require("../images/Carousal/eight.jpg")}
              alt="Eight slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/iJN6aq68vaWVtc5ZbaBNB5RgyZvl0Ygu8uS9YGPN.jpg"
              alt="Ninth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ maxHeight: "100%", maxWidth: "100%", height: "100%", objectFit: "cover", filter: "brightness(100%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/aEKNBd54rDJLZHgegF16tZUekifoR0hDY7lkUkaV.jpg"
              alt="Tenth slide"
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

      <div className="card-container">
        <div className="card">
          {Object.keys(filteredItemsByCategory).length > 0 ? (
            Object.keys(filteredItemsByCategory).map((categoryName) => (
              <div className="row mb-5" key={categoryName}>
                <div className="fs-3"><b>{categoryName}</b></div>
                <hr />
                {filteredItemsByCategory[categoryName].map((filteritems) => (
                  <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                    <Card
                      productname={filteritems.name}
                      imgsrc={filteritems.img}
                      productid={filteritems._id}
                    ></Card>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div key="customevent" className="row mb-3">
              <div className="fs-3 m-3">Did not find what you were searching for?</div>
              <hr />
              <div className="col-12 col-md-6 col-lg-3">
                <Card
                  productname={lastEventItem.name}
                  imgsrc={lastEventItem.img}
                  productid={lastEventItem._id}
                ></Card>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />

    </div >
  );
}
