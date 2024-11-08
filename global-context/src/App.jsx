import { useContext } from 'react'
import { GlobalContext } from './AppContext'

const App = () => {
  const { count, name, incrementDown, incrementUp } = useContext(GlobalContext)

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Main app</h2>
      <h4>Counter</h4>
      <p>
        Hey {name}, the count is {count}
      </p>
      <button type="button" className="btn" onClick={incrementUp}>
        Up
      </button>
      <button type="button" className="btn" onClick={incrementDown}>
        Down
      </button>
    </div>
  )
}
export default App
