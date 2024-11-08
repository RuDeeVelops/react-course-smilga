import { useState } from 'react'
import List from './List'
import { data } from '../../../../data'
import Input from './Input'

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)

  const addPerson = (name) => {
    const fakeId = Date.now()
    const newPerson = { id: fakeId, name }
    setPeople((prevState) => [...prevState, newPerson])
  }

  return (
    <section>
      <Input addPerson={addPerson} />
      <List people={people} />
    </section>
  )
}
export default LowerStateChallenge
