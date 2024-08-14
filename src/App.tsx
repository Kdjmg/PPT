import './App.css'
import { Routes,Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import Nav from './components/Nav'
import { Footer } from './components/Footer'
import PaymentPage from './pages/PaymentPage'
import AdminApp from './admin/AdminApp'


function App() {

  
  return <>
 
  
    <Nav/>
  
  <Routes>
  <Route path='/admin/*' element={<AdminApp/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/payment' element={<PaymentPage/>}></Route>
</Routes>


  
 
 

<Footer/>

  </>
}

export default App
