import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            minus? Veniam, neque? Vero, fugiat tenetur rem libero sit ex, cum
            laudantium eius, maiores nesciunt incidunt quas blanditiis debitis!
            Eveniet, maxime.
          </p>
          <div className="footer-social-items">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 970089301</li>
            <li>contact@gg.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Pratham. All rights reserved.</p>
    </div>
  );
};

export default Footer;
