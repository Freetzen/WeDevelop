import { Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import CreateProyect from './components/createProyect/CreateProyect'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/quote" element={<Quote/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/proy" element={<CreateProyect/>}></Route>
    </Routes>
    </>
  )
}

export default App