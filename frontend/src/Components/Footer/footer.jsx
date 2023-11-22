import React from 'react'
import "./footer.css"
import footerlogo from "../Assets/logo_big.png"
import instagram from "../Assets/instagram_icon.png"
import pinterest from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"


const footer = () => {
  return (
    <div className='footer'>

        <div className="footer-logo">
            <img src={footerlogo} alt="" />
            <p>Shopper</p>
        </div>
<ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
<p>all right reserved.</p>
    </div>
    </div>
  )
}

export default footer
