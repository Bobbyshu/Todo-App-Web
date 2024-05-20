import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
export default function WelcomeComponent() {
  const { username } = useParams()

  function callHello() {
    axios
      .get('http://localhost:8080/hello-world')
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log('cleanup'))
  }

  function successfulResponse(response) {
    console.log(response)
  }

  function errorResponse(error) {
    console.log(error)
  }

  return (
    <div className="WelcomeComponent">
      <h1> Welcome {username} </h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHello}>
          Call Hello World
        </button>
      </div>
    </div>
  )
}
