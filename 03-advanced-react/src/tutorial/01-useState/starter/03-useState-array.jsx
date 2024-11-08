import { data } from '../../../data'
import { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearAllItems = () => {
    setPeople([])
  }

  return (
    <div>
      <h2>useState array example</h2>
      <ul>
        {people.map(({ id, name }) => {
          return (
            <div key={id}>
              <li>{name}</li>
              <button type="button" className="btn" onClick={() => removeItem(id)}>
                Remove
              </button>
            </div>
          )
        })}
      </ul>
      <button type="button" className="btn" onClick={clearAllItems}>
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray
