import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Shop from './Pages/Shop'


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

          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App; 
