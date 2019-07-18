import './Header.css'
import React from 'react'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'

export default props =>
    <header className="header">
       <div className="header-estrutura">
           header
          <Link to="/" className="logo">
             <img src={logo} alt="logo" />
          </Link>
       </div>

      
    </header>