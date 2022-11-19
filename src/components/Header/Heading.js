import React from 'react'
import {FcPhone} from 'react-icons/fc'
import {HiOutlineMail} from 'react-icons/hi'
import {GrFacebook,GrLinkedin,GrTwitter} from "react-icons/gr";
import{FaPinterest} from 'react-icons/fa';
import './Heading.css'
function Heading() {
  return (
    <div className='header' id='home'>
        {/* <div className='left'> */}
          <span id='span1' > <FcPhone/>  Call Us: +98 54321 67890 </span>
        <span id='span2'> <HiOutlineMail/> Email Us: support@example.com</span>
        <span id='spanright'>  
        <span id='facebook'><GrFacebook/></span>
        <span id='twitter'><GrTwitter/></span>
        <span id='linkedin'><GrLinkedin/></span>
        <span id='pinterest'><FaPinterest/></span>
        </span>
        {/* </div> */}
        
        
        </div>
  )
}

export default Heading