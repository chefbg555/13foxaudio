import React, { Component } from 'react'
import Navbar from  '../components/Navbar'
import {Link} from 'react-router-dom'
export default class Content extends Component {
  render() {
    return (
      <div>

         <Link to='/'><span className="content-title">CONTENT</span></Link> 
        
          
            <Navbar/> 
        
      </div>
    )
  }
}
