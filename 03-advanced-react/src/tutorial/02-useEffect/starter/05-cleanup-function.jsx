import { useEffect } from 'react'
import { useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(true)

  const hideMsg = () => {
    setToggle((prevState) => !prevState)
  }

  return (
    <div>
      <h2>cleanup function</h2>
      {toggle && <WelcomeToggle />}
      <button type="button" className="btn" onClick={hideMsg}>
        Toggle Visibility
      </button>
    </div>
  )
}

export default CleanupFunction

const WelcomeToggle = () => {
  useEffect(() => {
    console.log('useEffect with empty dependancy will fire at every mount')
    const intId = setInterval(() => {
      console.log('Triggered!')
    }, 1000)
    return () => {
      clearInterval(intId)
    }
  }, [])

  return (
    <div>
      <h4>Cuckoo!</h4>
    </div>
  )
}
