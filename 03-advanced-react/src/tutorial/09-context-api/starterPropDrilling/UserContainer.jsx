import { useAppContext } from './Navbar'

const UserContainer = () => {
  // useAppContext is a custom hook that just replaces the (useContext(NavbarContext)) that should've been used in the next line. Just to centralize stuff inside ./Navbar.jsx
  const { name, userLogIn, userLogOut } = useAppContext

  return (
    <div>
      <h4>Hello {name || 'Super Guest!'}</h4>
      <button type="button" className="btn" onClick={name ? userLogOut : userLogIn}>
        {name ? `logout` : `login`}
      </button>
    </div>
  )
}
export default UserContainer
