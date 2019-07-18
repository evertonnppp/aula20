import './App.css'
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../compoments/template/Header'
import MainCenter from '../compoments/template/MainCenter'
import NavLeft from '../compoments/template/NavLeft'
import NavRight from '../compoments/template/NavRight'



export default props =>
    <BrowserRouter>
        <div className="app">
            <Header />   
            <NavLeft />
            <MainCenter />
            <NavRight />
        </div>
    </BrowserRouter>