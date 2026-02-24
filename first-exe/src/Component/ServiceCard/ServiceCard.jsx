import React from "react";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

function ServiceCard({ cardid, cardtitle, carddescription }) {
  return (
    <div className="serviceCard">
      <h2>{cardid}</h2>
      <h1>{cardtitle}</h1>
      <p>{carddescription}</p>

      <Link className="readMore" to="">
        Read More
      </Link>
    </div>
  );
}

export default ServiceCard;
