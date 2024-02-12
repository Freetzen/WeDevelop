import { Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import CreateProyect from './components/createProyect/CreateProyect'
import userProvider from './utils/provider/userProvider/userProvider'
import Projects from './pages/projects/Projects'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/quote" element={<Quote/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
    </Routes>
    </>
  )
}

export default App