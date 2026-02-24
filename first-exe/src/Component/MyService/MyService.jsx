import React from "react";
import "./MyService.css";
import ServiceCard from "../ServiceCard/ServiceCard";

function MyService() {
  return (
    <div className="myService" id="service">
      <div className="serviceTitle">
        <h1>My Service</h1>
      </div>

      <div className="myserviceContainer">
        <ServiceCard
          cardid="01"
          cardtitle="Web development"
          carddescription="I do some research before starting my development to choose the right way for the job."
        />
        <ServiceCard
          cardid="02"
          cardtitle="Fully Responsive"
          carddescription="I design my website for every screen size available and I make sure it looks great on every device"
        />
        <ServiceCard
          cardid="03"
          cardtitle="Beautiful Code"
          carddescription="Working on projects, I write beautiful and clear codes to make them better readable for any partner or client"
        />
        <ServiceCard
          cardid="04"
          cardtitle="On Time"
          carddescription="Always responsible to complete any given project on time."
        />
        <ServiceCard
          cardid="05"
          cardtitle="Quick Learner"
          carddescription="I like to learn new things and I have the ability to learn it quickly."
        />
        <ServiceCard
          cardid="06"
          cardtitle="Online"
          carddescription="Easy to reach and happy to help."
        />
      </div>
    </div>
  );
}

export default MyService;
