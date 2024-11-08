const UserContainer = ({ name, userLogOut, userLogIn }) => {
  console.log(name, userLogOut)

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
