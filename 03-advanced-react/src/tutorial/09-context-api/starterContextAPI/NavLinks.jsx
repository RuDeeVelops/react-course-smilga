import UserContainer from './UserContainer'

const NavLinks = ({ name, userLogOut, userLogIn }) => {
  return <UserContainer name={name} userLogOut={userLogOut} userLogIn={userLogIn} />
}
export default NavLinks
