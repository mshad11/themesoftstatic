import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    
        
  <div className='container' >
   
    <span id='imagelogo'>
      <img src='https://themehoster.com/tf/html/tm/emexso/demo/assets/images/logo.png'/>
    </span>
    {/* <a class="navbar-brand" href="#">Home</a>
    <a class="navbar-brand" href="#">Features</a>
    <a class="navbar-brand" href="#">Review</a>
    <a class="navbar-brand" href="#">Product</a>
    <a class="navbar-brand" href="#">Faq</a>
    <a class="navbar-brand" href="#">Contact</a>
     */}
     {/* <span>
      <span className='main'>Home</span>
      <span className='main'>Feature</span>
      <span className='main'>Review</span>
      <span className='main'>Faq</span>
      <span className='main'>Contact</span>
      </span> */}

     <div id="menu">
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#review">Review</a>
      <a href="#faq">Faq</a>
      <a href="#contact">Contact</a>
      
     </div>


    <span><button type="button"  id='mybtn'>Shop Now</button></span>

  </div>

  )
}

export default Navbar