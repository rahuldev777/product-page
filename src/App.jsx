
import './App.css'
import Header from "./assets/Header"
import Productpart from './Pages/Productpart'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"




function App() {
  

  return (
    <>
    
    <Header/>

    <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/product" element={<Productpart />} />

    </Routes>
     
      
    </>
  )
}

export default App
