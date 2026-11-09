import './index.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Adm from './pages/Adm.tsx'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<Adm />} />
      </Routes>
    </div>
  )
}

export default App
