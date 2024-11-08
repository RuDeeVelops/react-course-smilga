import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(url)
      setUsers(await response.json())
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      <h2>fetch data example</h2>
      {users.map(({ id, login, avatar_url }) => {
        return (
          <ul className="users">
            <li className="users" key={id}>
              <img src={avatar_url} alt={login} />
              <h2>{login}</h2>
            </li>
          </ul>
        )
      })}
    </div>
  )
}
export default FetchData

// {
//   "login": "defunkt",
//   "id": 2,
//   "node_id": "MDQ6VXNlcjI=",
//   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/defunkt",
//   "html_url": "https://github.com/defunkt",
//   "followers_url": "https://api.github.com/users/defunkt/followers",
//   "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
//   "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
//   "organizations_url": "https://api.github.com/users/defunkt/orgs",
//   "repos_url": "https://api.github.com/users/defunkt/repos",
//   "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/defunkt/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false
// }
