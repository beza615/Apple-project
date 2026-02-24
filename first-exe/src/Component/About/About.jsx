import React, { useState } from "react";
import "./About.css";
import AboutImage from "../../assets/image/photo.jpg";

function About() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="about" id="about">
      <div className="aboutTitle">
        <h1>About Me</h1>
      </div>

      <div className="aboutBody">
        <div
          className="aboutImageContainer"
          onClick={() => setIsClicked(!isClicked)}
        >
          <img
            src={AboutImage}
            alt="Profile"
            className={isClicked ? "rotate-active" : ""}
          />
          {isClicked && (
            <div className="imageQuote">
              <p>"Code is my superpower!"</p>
            </div>
          )}
        </div>

        <div className="aboutDescAndSkill">
          <div className="aboutDescription">
            <span>
              I'm a Software Engineering Student
              <br />
              I'm a Frontend React Web Developer
            </span>
          </div>

          <div className="aboutSkill">
            <ul>
              <li>
                <div className="skillLabel">HTML</div>
                <div className="skillBarContainer">
                  <hr style={{ width: "90%" }} />
                </div>
              </li>
              <li>
                <div className="skillLabel">CSS</div>
                <div className="skillBarContainer">
                  <hr style={{ width: "85%" }} />
                </div>
              </li>
              <li>
                <div className="skillLabel">JAVASCRIPT</div>
                <div className="skillBarContainer">
                  <hr style={{ width: "80%" }} />
                </div>
              </li>
              <li>
                <div className="skillLabel">REACT</div>
                <div className="skillBarContainer">
                  <hr style={{ width: "75%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
