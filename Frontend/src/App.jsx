import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'

function App() {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/quote" element={<Quote/>}></Route>
      <Route path="/contact-us" element={<ContactUs/>}></Route>
    </Routes>
    </>
  )
}

export default App