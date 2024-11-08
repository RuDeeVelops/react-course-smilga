import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // do some CRUD operation
    console.log(name, email)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  )
}
export default ControlledInputs

// for a controlled input we send onChange events from the form inputs to react states.
// We force the input value to be the to state value (eg. name), onChange is triggered at every input field modification, referencing a handleChange callback function. The function sets each event.target.value as the state.
// Then on the form we use the onSubmit attribute and usually define a handleSubmit function
