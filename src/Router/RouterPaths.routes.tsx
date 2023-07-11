<<<<<<< HEAD

=======
>>>>>>> 663cd8a9a1eec3fe67ce8d4aa0b1bff6334e7bcf
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../Pages/index'
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