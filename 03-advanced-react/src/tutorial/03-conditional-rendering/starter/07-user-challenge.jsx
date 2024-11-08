import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: 'Rudy',
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <h2>user challenge</h2>
      {user ? <UserLogOut user={user} logout={logout} /> : <UserLogIn user={user} login={login} />}
    </div>
  )
}
export default UserChallenge

const UserLogOut = (props) => {
  return (
    <div>
      <h4>{`Hi there ${props.user.name}`}</h4>
      <button type="button" className="btn" onClick={props.logout}>
        Logout
      </button>
    </div>
  )
}
const UserLogIn = (props) => {
  return (
    <div>
      <h4>{`Hi there, please login`}</h4>
      <button type="button" className="btn" onClick={props.login}>
        Login
      </button>
    </div>
  )
}
