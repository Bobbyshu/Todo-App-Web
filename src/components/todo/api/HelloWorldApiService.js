import axios from 'axios'

export default function retrieveHelloWorld () {
  return axios
    .get('http://localhost:8080/hello-world')
}