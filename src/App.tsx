import './App.css'
import { Routes,Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import Nav from './components/Nav'


function App() {

  
  return <>
 
  <body>
    <Nav/>
  
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
  </body>
 
 

<footer className="bg-blue-950 text-white p-4">
    
</footer>

  </>
}

export default App
