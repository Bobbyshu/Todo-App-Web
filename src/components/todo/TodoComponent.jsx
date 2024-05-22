import { useParams } from 'react-router-dom'
import { retrieveTodoApi } from './api/TodoApiService copy'
import { useAuth } from './security/AuthContext'
import { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'

export default function TodoComponent() {
  const { id } = useParams()

  const authContext = useAuth()

  const username = authContext.username

  const [description, setDescription] = useState('')
  const [targetDate, setTargetDate] = useState('')

  useEffect(() => retrieveTodos(), [id])

  function retrieveTodos() {
    retrieveTodoApi(username, id)
      .then((response) => {
        setDescription(response.data.description)
        setTargetDate(response.data.targetDate)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="container">
      <h1>Enter Todo Details </h1>
      <div>
        <Formik initialValues={{}}>
          {(props) => (
            <Form>
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
