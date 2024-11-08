import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [userData, setUserData] = useState(data)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return // if name is empty early return
    setUserData([...userData, { id: userData.length + 1, name: name }])
    setName('')
  }

  const deleteUser = (id) => {
    setUserData((prevUserData) => prevUserData.filter((user) => user.id != id))
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          Add User
        </button>
      </form>

      <ul>
        {userData.map((user) => {
          return (
            <div key={user.id}>
              <li>{user.name}</li>
              <button type="button" className="btn" onClick={() => deleteUser(user.id)}>
                Delete
              </button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
export default UserChallenge

// export const data = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'peter' },
//   { id: 3, name: 'susan' },
//   { id: 4, name: 'anna' },
// ];
