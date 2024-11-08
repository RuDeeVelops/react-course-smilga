import { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

const AppContext = ({ children }) => {
  const [name, setName] = useState('Peter')
  const [count, setCount] = useState(0)

  const incrementUp = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const incrementDown = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <GlobalContext.Provider value={{ count, name, incrementUp, incrementDown }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
