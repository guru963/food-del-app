import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeholder from './pages/Placeorder/Placeholder'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/placeorder' element={<Placeholder/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App