import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function LoginComponent() {
  const [username, setUsername] = useState('Bobbyshu')
  const [password, setPassword] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  // check login
  function handleSubmit() {}

  return (
    <div className="Login">
      <h1> Login board </h1>
      {showSuccessMessage && (
        <div className="success">Authenticated successfully!</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          Authenticated failed, Please check your credentials.
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  )
}
