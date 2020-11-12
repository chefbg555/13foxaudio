import React, { Component } from 'react'
import Navbar from  '../components/Navbar'
import {Link} from 'react-router-dom'
export default class Aboutus extends Component {
  render() {
    return (
      <div>
       <Link to='/'> <span className="aboutus-title">ABOUT US</span> </Link>

      
        <Navbar/>
      </div>
    )
  }
}
