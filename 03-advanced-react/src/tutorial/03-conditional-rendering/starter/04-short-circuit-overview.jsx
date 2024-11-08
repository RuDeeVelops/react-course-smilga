import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('Juan')

  return (
    <div>
      <h1>Hi {name || 'Guest'}</h1>
      <h2>{text && `Here's your notes:${text}`} </h2>
    </div>
  )
}
export default ShortCircuitOverview
