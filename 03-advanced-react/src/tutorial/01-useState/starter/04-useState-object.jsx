import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Mark',
    age: 33,
    hobby: 'darts',
  })

  const switchPerson = () => {
    setPerson({ name: 'John', age: 45, hobby: 'Moon Gliding' })
  }

  return (
    <div>
      <h1>useState object example</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button type="button" className="btn" onClick={switchPerson}>
        Switch Person
      </button>
    </div>
  )
}

export default UseStateObject
