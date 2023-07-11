import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../Pages/index'





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