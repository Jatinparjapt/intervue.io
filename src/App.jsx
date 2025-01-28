import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './homeComp/Home'
import Security from './homeComp/Security'
import Feature from './homeComp/Feature'
import Explore from './homeComp/Explore'
import Faqs from './homeComp/Faqs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Home/>
   <Security/>
   <Feature/>
   <Explore/>
   <Faqs/>
   <Footer/>
   </>
  )
}

export default App
