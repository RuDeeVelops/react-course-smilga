const ErrorExample = () => {
  let count = 0
  const increase = () => {
    count = count + 1
    console.log(count)
  }

  return (
    <div>
      <h2>useState error example</h2>
      <p>Count is: {count}</p>
      <button type="button" className="btn" onClick={increase}>
        Increase
      </button>
    </div>
  )
}

export default ErrorExample
