import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']

const SelectInputs = () => {
  const [selectedFramework, setSelectedFramework] = useState(frameworks[0])

  const handleSelect = (e) => {
    setSelectedFramework(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedFramework)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Favorite Framework</h4>

        <div className="form-row" style={{ textAlign: 'left' }}>
          <select
            name="selectedFramework"
            id="selectedFramework"
            value={selectedFramework}
            onChange={handleSelect}>
            {frameworks.map((framework, index) => {
              return (
                <option key={`${index}-${framework}`} value={framework}>
                  {framework}
                </option>
              )
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default SelectInputs
