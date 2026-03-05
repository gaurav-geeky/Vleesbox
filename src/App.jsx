import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Shop from './Pages/Shop'
import HowtoOrder from './Pages/HowtoOrder'
import OurqualityMeat from './Pages/OurqualityMeat'
import MissionandVision from './Pages/MissionandVision'
import News from './Pages/News'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Register from './Pages/Register'
import Help from './Pages/Help'
import Cart from './Pages/Cart'


function App() {

  return (
    <>
      <div>
        {/* <Header />
        <Home />
        <Footer /> */}


        <Routes>
          
          <Route path='/' element={< Layout />}>

            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='how-to-order' element={<HowtoOrder />} />
            <Route path='our-quality-meat' element={< OurqualityMeat />} />
            <Route path='mission-and-vision' element={< MissionandVision />} />
            <Route path='news' element={<News />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signin' element={<Signin />} />
            <Route path='register' element={<Register />} />
            <Route path='help' element={<Help />} />
            <Route path='cart' element={<Cart />} />


          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App;


// my project imags 5, 6, so tell me






