import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
