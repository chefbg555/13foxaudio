
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FadeIn from 'react-fade-in' 
import logo from '../images/logo.jpg'
import Navbar from  '../components/Navbar'

export default class Landing extends Component {
  render() {
    return (
      <FadeIn delay='350' transitionDuration='2500'>
        <div className="homefade">
         <span className='foxaudio'> 13FOXAUDIO</span>
          <Link to='/aboutus'><img src={logo} height='90%' width='90%' className="logopicture"/></Link>
        </div>
        <Navbar/>
      </FadeIn>
       
    )
  }
}
