import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/Rudeevelops'

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchUser = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const userData = await response.json()
      setUser(userData)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error!</h2>
  }

  const { login, avatar_url, name, company, bio } = user
  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px' }} alt={login} src={avatar_url} />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData

// {
//   "login": "QuincyLarson",
//   "id": 985197,
//   "node_id": "MDQ6VXNlcjk4NTE5Nw==",
//   "avatar_url": "https://avatars.githubusercontent.com/u/985197?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/QuincyLarson",
//   "html_url": "https://github.com/QuincyLarson",
//   "followers_url": "https://api.github.com/users/QuincyLarson/followers",
//   "following_url": "https://api.github.com/users/QuincyLarson/following{/other_user}",
//   "gists_url": "https://api.github.com/users/QuincyLarson/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/QuincyLarson/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/QuincyLarson/subscriptions",
//   "organizations_url": "https://api.github.com/users/QuincyLarson/orgs",
//   "repos_url": "https://api.github.com/users/QuincyLarson/repos",
//   "events_url": "https://api.github.com/users/QuincyLarson/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/QuincyLarson/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Quincy Larson",
//   "company": "@freeCodeCamp ",
//   "blog": "https://www.freecodecamp.org",
//   "location": "Dallas, Texas, US, Earth",
//   "email": null,
//   "hireable": null,
//   "bio": "Teacher at https://www.freeCodeCamp.org - Learn to code for free.",
//   "twitter_username": null,
//   "public_repos": 53,
//   "public_gists": 58,
//   "followers": 4938,
//   "following": 73,
//   "created_at": "2011-08-17T04:08:08Z",
//   "updated_at": "2024-09-08T18:15:23Z"
// }
