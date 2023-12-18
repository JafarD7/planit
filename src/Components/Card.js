import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Card(props) {

  if (props.productid === '650827f193a978a8a04d0936') {
    return (
      <div>
        <div>
          <Link to={`/custom`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ maxWidth: "18rem", maxHeight: "100%" }}>
              <img src={props.imgsrc} width="100px" height="200px" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.productname}</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Link to={`/product-details?product_id=${props.productid}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card" style={{ maxWidth: "18rem", maxHeight: "100%" }}>
            <img src={props.imgsrc} width="100px" height="200px" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.productname}</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
