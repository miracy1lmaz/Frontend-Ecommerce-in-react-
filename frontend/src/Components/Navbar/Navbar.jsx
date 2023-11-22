import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'



const Navbar = () => {


        const [menu, setmenu] = useState("shop")

  return (
    <div   className='navbar' >  
      
    <div className="nav-logo">
    <Link   to="/">  <img src={logo} alt="" />  </Link>  
    <Link   to="/"> <p>Shopping</p>  </Link>  
    </div>

        <ul className="nav-menu">
            <li onClick={() => {setmenu("shop") }}><Link style={{display:"contents"}} to="/">   Shop  </Link>{menu ==="shop" ? <hr/> : ""}</li>
            <li onClick={() => {setmenu("mens") }}><Link style={{display:"contents"}} to="/mens">  Men  </Link>{menu ==="mens" ? <hr/> : ""}</li>
            <li onClick={() => {setmenu("womens") }}><Link style={{display:"contents"}} to="/womens">   Women  </Link>{menu ==="womens" ? <hr/> : ""}</li>
            <li onClick={() => {setmenu("kids") }}><Link style={{display:"contents"}} to="/kids">   Kids  </Link>{menu ==="kids" ? <hr/> : ""}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">     <button>Login</button>   </Link>

        </div>

    </div>
  )
}

export default Navbar
