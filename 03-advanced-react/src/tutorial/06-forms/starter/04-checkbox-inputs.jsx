import { useState } from 'react'
// const frameworks = ['react', 'angular', 'vue', 'svelte']
const OtherInputs = () => {
  const [flavor, setFlavours] = useState({
    sausage: false,
    tuna: false,
    kraut: false,
  })

  const handleChange = (e) => {
    setFlavours((prevObject) => {
      return { ...prevObject, [e.target.name]: e.target.checked }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFlavours({ sausage: false, tuna: false, kraut: false })
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Pizza flavours</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="sausage"> Sausage </label>
          <input
            type="checkbox"
            className="form-checkbox"
            name="sausage"
            id="sausage"
            checked={flavor.sausage}
            onChange={handleChange}
          />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="tuna">Tuna</label>
          <input
            type="checkbox"
            className="form-checkbox"
            name="tuna"
            id="tuna"
            checked={flavor.tuna}
            onChange={handleChange}
          />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="kraut">Kraut</label>
          <input
            type="checkbox"
            className="form-checkbox"
            name="kraut"
            id="kraut"
            checked={flavor.kraut}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
