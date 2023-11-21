import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Home from './Home'
import School from '../School'
import Experience from '../Experience'
import Projects from '../Projects'
import Email from '../Email'
import Phone from '../Phone'
import Socials from '../Socials'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/school', element: <School /> },
    { path: '/experience', element: <Experience /> },
    { path: '/projects', element: <Projects /> },
    { path: '/email', element: <Email /> },
    { path: '/phone', element: <Phone /> },
    { path: '/socials', element: <Socials /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

    </>
  )
}

export default App
