import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

const App = () => {
  const [page, setPage] = useState<'login' | 'register'>('login')

  return (
    <div className="container">
      {page === 'login' ? <Login /> : <Register />}
      <button
        className="switch-btn"
        onClick={() => setPage(page === 'login' ? 'register' : 'login')}
      >
        Switch to {page === 'login' ? 'Register' : 'Login'}
      </button>
    </div>
  )
}

export default App
