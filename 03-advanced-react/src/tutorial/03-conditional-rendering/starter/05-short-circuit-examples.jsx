import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h1>short circuit - examples</h1>
      <h2>&& Operator</h2>
      {user && <SomeComponent name={name} />}
      <h2>|| Operator</h2>
      <p>Your latest entry is: {text || 'empty!'}</p>
      <h2>Ternary Operator</h2>
      <p>{isEditing ? 'Waiting till you finish writing' : 'Ready to edit!'}</p>
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return <p>Hi {name}</p>
}

export default ShortCircuitExamples
