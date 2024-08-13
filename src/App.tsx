import './App.css'
import { Routes,Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import Nav from './components/Nav'
import { Footer } from './components/Footer'
import PaymentPage from './pages/PaymentPage'


function App() {

  
  return <>
 
  <body>
    <Nav/>
  
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/payment' element={<PaymentPage/>}></Route>
</Routes>
  </body>
 
 

<Footer/>

  </>
}

export default App
