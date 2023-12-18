import React from "react";

export default function Carousal() {
  return (
    <div>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ maxWidth: "100%" }}
      >
        <div className="carousel-inner" style={{ maxHeight: "500px" }}>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me- 2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="purple2">
                <button className="btn m-2 rounded text-white my-2 my-sm-0" type="submit">
                  Search
                </button>
              </div>
            </form>

          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/eYjkLsZME49eYo8DT0yHwJebseFRa5jNxrdEXDJj.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/jGHwPSoGyDPLZr78bShnB95AVFX4G0THtZEhyUyo.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/ww3XzhTBo64TTaJinDApOzDB84l6wwAO8bHfdAfw.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=600"
              alt="fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Sixth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://i0.wp.com/birthdayvala.in/wp-content/uploads/2022/01/IMG-20211022-WA0002.jpg?zoom=3&resize=247%2C296&ssl=1"
              alt="Seventh slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://i0.wp.com/birthdayvala.in/wp-content/uploads/2022/01/12.jpg?zoom=2&resize=247%2C296&ssl=1"
              alt="Eight slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/iJN6aq68vaWVtc5ZbaBNB5RgyZvl0Ygu8uS9YGPN.jpg"
              alt="Ninth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ filter: "brightness(70%)" }}
              width="auto" height="100%"
              src="https://www.midaasevents.co.in/storage/package/TcjXv1Y1SBg4LPdtINs7XjiSVcfXx019bHlrOOGA.jpg"
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

    </div>
  );
}




