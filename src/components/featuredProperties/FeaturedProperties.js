import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">B&Bs</span>
        <span className="fpCity">Lahore</span>
        <span className="fpPrice">Starting from 1000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450279.jpeg?k=cb9ab85ffe439f3030e00281f2d52583a398bf076e54f00f746e1d1baf62bf6e&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">B&Bs</span>
        <span className="fpCity">Lahore</span>
        <span className="fpPrice">Starting from 1000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">B&Bs</span>
        <span className="fpCity">Lahore</span>
        <span className="fpPrice">Starting from 1000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450068.jpeg?k=41cc7c5449011323aaaaed4e845cb16200b5d540c77a50c1bea90399a1e92d70&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">B&Bs</span>
        <span className="fpCity">Lahore</span>
        <span className="fpPrice">Starting from 1000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
