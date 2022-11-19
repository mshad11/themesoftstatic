import React from 'react'
import {SlDiamond} from 'react-icons/sl'
import {BiUser} from 'react-icons/bi'
import {TfiCheck} from 'react-icons/tfi'
import './Lowerbody.css'
function Lowerbody() {
  return (
    <div className='lowerbody'>
        <div className='aboutwatch'>
            <h5>ABOUT THE WATCH</h5>
            <h1>Awesome Digital Watch Can</h1>
            <h1>Make Your Life Easier</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, delectus hic omnis, rem vero optio <br/>maxime placeat accusantium beatae, quo ut. Adipisci mollitia consequuntur optio ad voluptates nihil quas hic?</p>
        </div>
     <div id="container">
      <div className="attract">
      <div className="diamond"><SlDiamond/></div>
      <div className="design"><h3>Attractive Design</h3></div>
      <div className="designtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nobis eaque odit vitae consequuntur saepe nisi vel quo voluptatem, quod voluptates esse placeat adipisci minus, quia sunt quasi maxime assumenda!</div>
      </div>
      <div className="attract">
      <div className="diamond"><BiUser/></div>
      <div className="design"><h3>Attractive Design</h3></div>
      <div className="designtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nobis eaque odit vitae consequuntur saepe nisi vel quo voluptatem, quod voluptates esse placeat adipisci minus, quia sunt quasi maxime assumenda!</div>
      </div>
      <div className="attract">
      <div className="diamond"><TfiCheck/></div>
      <div className="design"><h3>Attractive Design</h3></div>
      <div className="designtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nobis eaque odit vitae consequuntur saepe nisi vel quo voluptatem, quod voluptates esse placeat adipisci minus, quia sunt quasi maxime assumenda!</div>
      </div>
      </div>

    </div>
  )
}

export default Lowerbody