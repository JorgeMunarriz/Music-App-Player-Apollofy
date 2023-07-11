import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../pages/index'
import React from 'react'



export const Router: React.FC = ()=> {

  
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            

            <Route path='/*' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    )
  
}