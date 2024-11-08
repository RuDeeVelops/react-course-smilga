const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget) // returns an iterator object. We want to convert it to an object.
    const newUser = Object.fromEntries(formData) // the Object.fromEntries() method transforms a list of key-value pairs into an object.
    console.log(newUser)
    e.currentTarget.reset()
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-input" id="password" name="password" />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default UncontrolledInputs
