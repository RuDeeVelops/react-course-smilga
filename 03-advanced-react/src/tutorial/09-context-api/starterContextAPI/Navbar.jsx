import { useState } from 'react'

import NavLinks from './NavLinks'

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

  return <NavLinks {...user} userLogOut={userLogOut} userLogIn={userLogIn} />
}
export default Navbar
