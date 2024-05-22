import { createContext, useContext } from "react"
import { useState } from "react"
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService"
import { apiClient } from "../api/ApiClient"

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider ({ children }) {

  const [isAuthenticated, setAuthenticated] = useState(false)

  const [username, setUsername] = useState(null)

  const [token, setToken] = useState(null)


  // function login (username, password) {
  //   if (username === 'Bobbyshu' && password === '123') {
  //     setAuthenticated(true)
  //     setUsername(username)
  //     return true
  //   } else {
  //     setAuthenticated(false)
  //     setUsername(null)
  //     return false
  //   }
  // }

  async function login (username, password) {
    const basicToken = 'Basic ' + window.btoa(username + ":" + password)
    try {
      const response = await executeBasicAuthenticationService(basicToken)

      if (response.status == 200) {
        setAuthenticated(true)
        setUsername(username)
        setToken(basicToken)

        apiClient.interceptors.request.use(
          (config) => {
            config.headers.Authorization = basicToken
            return config
          }
        )

        return true
      } else {
        logout()
        return false
      }
    } catch (error) {
      logout()
      return false
    }
  }

  function logout () {
    setAuthenticated(false)
    setUsername(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
      {children}
    </AuthContext.Provider>
  )
}