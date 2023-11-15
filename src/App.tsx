import './App.css'
import { Routes,Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'


function App() {


  return <>
  <img className=" absolute max-w-[10%] mx-2" src="/public/ppt.png" alt="" />
      <nav className="flex justify-center items-center bg-gray-800 text-white py-8">
      <ul className="flex space-x-4">
        <li>
          <a href="{Home}" className="hover:text-gray-300">
          <NavLink to='/'>Acceuil</NavLink>
          </a>
        </li>
        <li>
          <a href="{Menu}" className="hover:text-gray-300">
          <NavLink to='/menu'>Menu</NavLink>

          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
          <NavLink to='/contact'>Contact</NavLink>

          </a>
        </li>
      </ul>
    </nav>
  
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
  </>
}

export default App
