import React from 'react'
import Image from "../assets/Images/image1.jpg"

function Header() {
  return (
    <div>
      <h1>header</h1>
      <img src={Image} alt="" />
    </div>
  );
}

export default Header;