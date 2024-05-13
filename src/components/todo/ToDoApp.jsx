import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  )
}

function LoginComponent() {
  const [username, setUsername] = useState('Bobbyshu')
  const [password, setPassword] = useState('')

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleSubmit() {}

  return (
    <div className="Login">
      <div className="success">Authenticated successfully</div>
      <div className="errorMessage">Authenticated failed</div>
      <div className="LoginForm">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
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

function WelcomeComponent() {
  return <div className="Welcome">Welcome Component</div>
}
