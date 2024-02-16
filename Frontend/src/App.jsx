import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import { Quote } from './pages/quote/Quote'
import ContactUs from './pages/contactUs/ContactUs'
import Projects from './pages/projects/Projects'
import AdminWindow from './pages/adminWindow/AdminWindow'
import CreateProject from './components/adminUtils/createProject/CreateProject'
import ProjectDetails from './components/details/DetailProyects'
import Pricing from './components/pricing/Pricing'
import UserAdmin from './components/adminUtils/usersAdmin/UserAdmin'
import NotFound from './pages/notFound/NotFound'




function App() {

  const location = useLocation()

  return (
    <>
      {location.pathname !== '/admin'
        && location.pathname !== '/createProject'
        && location.pathname !== '/createUser'
        && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        <Route path="/admin" element={<AdminWindow />}></Route>
        <Route path="/createProject" element={<CreateProject />}></Route>
        <Route path="/createUser" element={<UserAdmin />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </>
  )
}

export default App