import React from 'react'
import logo from '../../image/sibdev-logo.png'

import './header.css'

export const Header = () => {
  const [activeHeader,setActiveHeader] = React.useState(null)
  const heandleClick = (param) => setActiveHeader(param)
  return (
    <div className='header'>
        <div className='search-favorites'>
            <img className='mr' src={logo} alt="logo" />
            <p onClick={()=>heandleClick(1)} className={activeHeader === 1? 'cur mr mt header-active': 'cur mr mt'}>Поиск</p>
            <p onClick={()=>heandleClick(2)} className={activeHeader === 2? 'cur mt header-active': 'cur mt'}>Избранное</p>
        </div>
        <p className='cur mt'>Выйти</p>
    </div>
  )
}
