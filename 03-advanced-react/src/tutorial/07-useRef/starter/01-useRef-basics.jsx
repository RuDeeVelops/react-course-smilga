import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  // console.log(refContainer)

  const isMounted = useRef(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = refContainer.current.value
    console.log(name)
  }

  useEffect(() => {
    // if it's false (default value, initial render), flip the value in the ref and since it's useRef we don't trigger rerenders, then return early
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    // otherwise do something on dependency change
    console.log(isMounted)
  }, [value])

  // or we can run useRef to access focus method of the DOM element and run it only on first render
  useEffect(() => {
    refContainer.current.focus()
  }, [])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-input" ref={refContainer} />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
