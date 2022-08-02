import React from 'react'
import logo from '../../image/sibdev-logo.png'

import './header.css'

export const Header = () => {
  return (
    <div className='header'>
        <div className='search-favorites'>
            <img className='header-p mr' src={logo} alt="logo" />
            <p className='header-p cur mr'>Поиск</p>
            <p className='header-p cur'>Избранное</p>
        </div>
        <p className='cur'>Выйти</p>
    </div>
  )
}
