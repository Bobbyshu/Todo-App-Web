import axios from 'axios'
import { apiClient } from './ApiClient'

export const retrieveHelloWorld
  = () => apiClient.get('/hello-world')

export const retrieveHelloWorldPathVariable
  = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: token
    }
  })

export const executeBasicAuthenticationService
  = (token) => apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token
    }
  })