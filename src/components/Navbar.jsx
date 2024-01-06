import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../icons/logo-eldorado.png"
import { useSelector } from 'react-redux'


const Navbar = () => {
  const productData = useSelector(state => state.count)

  return (
    <nav>
      <ul>
        <li>
            <NavLink to="/" className="navbar-link">Market</NavLink>
        </li>
        <li>
            <NavLink to="/basket" className="navbar-link">Basket</NavLink>
        </li>
      </ul>
      <div>&#128722; {productData}</div>
      <img src={logo} alt="mem veka)" className="logo" />
    </nav>
  )
}

export default Navbar