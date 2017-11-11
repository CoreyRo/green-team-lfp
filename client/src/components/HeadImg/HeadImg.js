import React from 'react'
import './HeadImg.css'

const HeadImg = props =>
  <div
    className='HeadImg text-center'
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>

export default HeadImg
