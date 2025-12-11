import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <header>
        <div className="header-content">
          <h2>Welcome to my clothes store</h2>
          {user && (
            <div className="header-user-info">
              <span className="user-email">{user.email}</span>
              <button onClick={handleLogout} className="logout-button">
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
