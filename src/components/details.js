import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Estyle.css";

function Details() {
  const location = useLocation();

  const [apiData, setApiData] = useState([]);
  console.log("apiDataaa",location.state.id);
  const fetchData = async  () => {
    const response = await fetch(`https://dummyjson.com/products/${location.state.id}`);
    const data = await response.json();
    console.log("data",data);
    setApiData(data);
  }

  useEffect(() => {
   fetchData();
  },[]);

  return (
    <div>
      <div className="detail-main-cont">
        <div className="det-image">
          <img src={apiData.thumbnail} className="rounded" width="155" alt="Logo" />
        </div>
        <div>
          
          <div className="det-name">
            <span className="det-heading">{apiData.title}</span>
          </div>
          <div className="det-price">
            <div className="det-inner-price">
              <span className="det-heading">Price</span>
              <span>{apiData.price}</span>
            </div>
            <div className="det-inner-rating">
              <span className="det-heading">Rating</span>
              <span>{apiData.rating}</span>
            </div>
          </div>
          <div className="det-cat">
            <div className="d-flex flex-column">
              <span className="det-heading">Description</span>
              <span className="number3">{apiData.description}</span>
            </div>
          </div>
          <div className="det-btn">
              <button className="btn btn-primary m-4">Buy</button>
              <button className="btn btn-secondary m-4">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
