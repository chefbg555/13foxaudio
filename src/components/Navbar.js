import React from 'react'
import {NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

const Navbar = props => {
  return(
    <nav className="landingbuttons">
      <NavLink to="/aboutus"> <span>About us</span></NavLink>
      <NavLink to="/contact"><span>Contact</span></NavLink>
      <NavLink to="/content"><span className='bottom-marg'>Content</span></NavLink>

    </nav>
  )
}

export default withRouter(Navbar)