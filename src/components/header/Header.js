import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/sibdev-logo.png'

import './header.css'

export const Header = ({setRes}) => {
  const [activeHeader,setActiveHeader] = React.useState(null)
  const heandleClick = (param) => setActiveHeader(param)

  const onClickExit = () => {
    localStorage.setItem('reg', JSON.stringify({login: '', password: ''}))
    setRes({login: '', password: ''})
  }

  return (
    <div className='header'>
        <div className='search-favorites'>
            <Link to={'/'}><img className='header-img' src={logo} alt="logo" /></Link>
            <Link to={'/home'}><p onClick={()=>heandleClick(1)} className={activeHeader === 1? 'cur marg header-active': 'cur marg header-item'}>Поиск</p></Link>
            <Link to={'/favorite'}><p onClick={()=>heandleClick(2)} className={activeHeader === 2? 'cur marg header-active': 'cur marg header-item'}>Избранное</p></Link>
        </div>
        <p 
        onClick={onClickExit} 
        className='cur marg header-item'>Выйти</p>
    </div>
  )
}

// 

// setRes({login: '', password: ''})