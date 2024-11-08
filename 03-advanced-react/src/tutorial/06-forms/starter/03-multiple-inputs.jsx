import { useState } from 'react'

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    setUser({ name: '', email: '', password: '' })
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>

        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            onChange={handleChange}
            value={user.name}
            name="name"
          />
        </div>

        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            onChange={handleChange}
            value={user.email}
            name="email"
          />
        </div>

        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Your Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            onChange={handleChange}
            value={user.password}
            name="password"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
export default MultipleInputs

/* // Square Bracket Notation or Computed Property Names can be used for multiple purposes. Think of it as a dynamic variable.

const variableName = 'keyName'
const firstObj = { [variableName]: 'value' } //this sets {keyName: "value"}
firstObj.keyName = 'value2' //this updates {keyName: "value2"}
firstObj['keyName'] = 'value3' //this updates {keyName: "value3"}
firstObj[variableName] = 'value4' //this updates {keyName: "value4"}
console.log(firstObj) //{keyName: "value4"}
console.log(firstObj['keyName']) //value4
console.log(firstObj[variableName]) //value4 - it logs the value of key-value pair

// two other options
const obj = {}
const key = 'age'
obj[key] = 25 // creates a new property {'age':25}
obj['age'] = 25 // Same thing!
console.log(obj)
// {age: 25}

const printer = 'color'
const box = { [printer]: 'blue' }
console.log(box) // { color: 'blue' }  NOT { printer: 'blue' }
console.log(box[printer]) // blue NOT color

// dynamic object property

const state = {
  user: '',
  job: '',
  flag: true,
}

function updateState(key, value) {
  state[key] = value
}

updateState('user', 'rudy') // logs { user: 'rudy', job: '', flag: true }
updateState('flag', false) // logs { user: 'rudy', job: '', flag: false }
updateState('job', 'developer') // logs { user: 'rudy', job: 'developer', flag: false }
 */
