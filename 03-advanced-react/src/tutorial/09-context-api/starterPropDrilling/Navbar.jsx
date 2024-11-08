import { useState, createContext } from 'react'
import { useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()
console.log(NavbarContext)

// custom hook
export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'Phenomenon',
  })

  const userLogOut = () => {
    setUser({ ...user, name: null })
  }

  const userLogIn = () => {
    setUser({ ...user, name: 'Phenomenon' })
  }

  return (
    <NavbarContext.Provider value={{ ...user, userLogIn, userLogOut }}>
      <NavLinks />
    </NavbarContext.Provider>
  )
}
export default Navbar
