import React from "react";
import "./Feature.css";
import { GrNotification } from "react-icons/gr";
import { MdVideoCall } from "react-icons/md";
import { BsChatRightQuote } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";

function Feature() {
  return (
    <div className="features" id="features">
      <div className="feat">
        <h6>FEATURES</h6>
        <h2>The Watch Has Lots Of</h2>
        <h2>Excellent Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          veritatis qui perspiciatis, natus nam <br />
          dicta. Soluta quia qui molestiae veritatis iusto sapiente architecto
          minus ut, aperiam, maxime accusantium fugit nam.
        </p>
      </div>

      
     <div className="container">
     <div className="left">
        <div className="notifi">
            <span id="noticon"><GrNotification/></span>
            <span id="notification">Notification Alert</span>
            <p id="paranoti">Lorem ipsum dolor, <br/>sit amet consectetur <br/>adipisicing elit.<br/> Quo quos, aperiam </p>
        </div>
        <div className="video">
        <span id="videoicon"><MdVideoCall /></span>
            <span id="videocall">Instant Video Call</span>
            <p id="paravideo">Lorem ipsum dolor, <br/>sit amet consectetur <br/>adipisicing elit.<br/> Quo quos, aperiam </p>
        </div>
     </div>
     <div className="image">
        <img src="https://themehoster.com/tf/html/tm/emexso/demo/assets/images/watch-5.png" alt="" width= '200px' height='300px'/>
     </div>
     <div className="right">
     <div className="user">
            <span id="usericon">< BsChatRightQuote/></span>
            <span id="userchat">User Live Chat</span>
            <p id="parauser">Lorem ipsum dolor, <br/>sit amet consectetur <br/>adipisicing elit.<br/> Quo quos, aperiam </p>
        </div>

        <div className="install">
            <span id="installicon">< DiAndroid /></span>
            <span id="installapp">Install Any App</span>
            <p id="parainstall">Lorem ipsum dolor, <br/>sit amet consectetur <br/>adipisicing elit.<br/> Quo quos, aperiam </p>
        </div>

     </div>
    </div>


      </div>
    
  );
}

export default Feature;
