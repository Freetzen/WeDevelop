import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import Projects from './pages/projects/Projects'
import AdminWindow from './pages/adminWindow/AdminWindow'
import CreateProject from './components/adminUtils/createProject/CreateProject'
import ProjectDetails from './components/details/DetailProyects'


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/quote" element={<Quote/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/projects/:id" element={<ProjectDetails/>}></Route>
      <Route path="/admin" element={<AdminWindow />}></Route>
      <Route path="/createProject" element={<CreateProject />}></Route>
    </Routes>

    </>
  )
}

export default App