import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../pages/index'





export const Router= ()=> {

  
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            

            <Route path='/*' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    )
  
}