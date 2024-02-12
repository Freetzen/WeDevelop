import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import userProvider from './utils/provider/userProvider/userProvider'
import Projects from './pages/projects/Projects'

function App() {

  const getUs = async () => {
    const users = await userProvider.getUsers()

    console.log('usuarios', users)
  }

  getUs()

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