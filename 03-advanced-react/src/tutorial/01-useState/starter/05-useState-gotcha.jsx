import { useState } from 'react'

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0)
  const [counterAlt, setCounterAlt] = useState(0)

  const increaseCount = () => {
    setCounter((prevValue) => {
      const newState = prevValue + 1
      console.log(`prev:${prevValue}`)
      console.log(`Current:${newState}`)
      return newState
    })
  }

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <p>{counter}</p>
      <button className="btn" type="button" onClick={increaseCount}>
        Increase
      </button>
    </div>
  )
}

export default UseStateGotcha
