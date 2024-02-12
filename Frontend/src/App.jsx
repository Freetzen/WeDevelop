import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import userProvider from './utils/provider/userProvider/userProvider'
import AdminWindow from './pages/adminWindow/AdminWindow'

function App() {

  const getUs = async () => {
    const users = await userProvider.getUsers()

    // console.log('usuarios', users)
  }

  getUs()

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/admin" element={<AdminWindow />}></Route>
      </Routes>
    </>
  )
}

export default App