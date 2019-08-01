import React, { Component } from 'react';
import './Footer.css';


const boldStyle = {
  fontWeight: 'bold',
}

const colorStyle = {
  color: "#F46641",
  textDecoration: "none",
}

const footerStyle = {
    fontFamily: 'Libre Franklin',
    color: "white",
    backgroundColor: "#2C2A42",
    borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    fontSize: "12px",
    paddingLeft: "40px",
    paddingTop: "8px",
    paddingBottom: '8px',
    position: "absolute",
    left: "10",
    bottom: "0",
    height: "42px",
    width: "100%",
    letterSpacing: ".0125em",
    
}

class Footer extends Component {
  render() {
    return (
      <div style = {footerStyle}>
        <p>
           <span style= {boldStyle}>WithAll </span> 
          • 5354 Parkdale Drive • Saint Louis Park, MN 55416
          |  <span ><a style = {colorStyle} href= "www.withall.org" >  www.withall.org  </a></span>
           | © 2019 All rights reserved.
          </p>


      </div>
    );
  }
}

export default Footer;
