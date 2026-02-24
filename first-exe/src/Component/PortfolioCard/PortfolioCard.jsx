import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";
import image from "../../assets/Image/puppy-lovers-page-design.jpg";

function PortfolioCard({ Portfolioimage, portfolioheadline }) {
  return (
    <div className="portfolioCard">
      <div className="imageWithHeadeline">
        <img src={Portfolioimage} alt="" />
        <h1>{portfolioheadline}</h1>
      </div>
    </div>
  );
}

export default PortfolioCard;
