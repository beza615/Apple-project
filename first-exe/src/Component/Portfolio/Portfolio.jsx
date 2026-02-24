import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

function Portfolio() {
  // 1. ከባክኤንድ የሚመጣውን ዳታ ለመያዝ useState እንጠቀማለን
  const [projects, setProjects] = useState([]);

  // 2. ገጹ ሲከፈት ዳታውን ከባክኤንድ ለመጥራት useEffect እንጠቀማለን
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data); // ዳታውን በ projects state ውስጥ እናስቀምጣለን
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolioTitle">
        <h1>My latest Work</h1>
      </div>

      <div className="portfolioComponent">
        {/* 3. ዳታቤዝ ውስጥ ካሉ ፕሮጀክቶች ተነስተን ካርዶችን እንሰራለን */}
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            Portfolioimage={project.Portfolioimage}
            portfolioheadline={project.portfolioheadline}
          />
        ))}

        {/* ዳታቤዝ ውስጥ ምንም ከሌለ ይህ ይታያል */}
        {projects.length === 0 && <p>Loading projects...</p>}
      </div>
    </div>
  );
}

export default Portfolio;
