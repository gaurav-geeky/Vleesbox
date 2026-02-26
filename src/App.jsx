import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Shop from './Pages/Shop'
import HowtoOrder from './Pages/HowtoOrder'
import OurqualityMeat from './Pages/OurqualityMeat'
import MissionandVision from './Pages/MissionandVision'
import News from './Pages/News'
News

function App() {

  return (
    <>
      <div>
        {/* <Header />
        <Home />
        < Footer /> */}

        <Routes>
          <Route path='/' element={< Layout />}>

            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='how-to-order' element={<HowtoOrder />} />
            <Route path='our-quality-meat' element={< OurqualityMeat />} />
            <Route path='mission-and-vision' element={< MissionandVision />} />
            <Route path='news' element={<News />} />

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App;









