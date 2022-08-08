import React from 'react'

import './cart.css'

export const Cart = ({text, img, textSup, activeRules}) => {
  return (
    <div className={!activeRules ? 'cart': 'cart cart-flex'}>
      <img className={!activeRules ? 'cur': 'cur cart-video'} src={img} alt="Video" />
      <div>
      <p className='cart-p'><b>{text}</b></p>
      <p className='cart-p2'>{textSup}</p>
      </div>
    </div>
  )
}
