import { useState } from 'react'

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleColor = () => {
    setIsToggled((prevToggle) => !prevToggle)
  }

  return (
    <div>
      <h2>toggle challenge</h2>
      <button type="button" className="btn" onClick={toggleColor} style={isToggled ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>
        Toggle Color
      </button>
    </div>
  )
}

export default ToggleChallenge
