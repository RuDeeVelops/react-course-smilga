import { useState, useEffect } from 'react'

const Example = () => {
  // AND (&&) operator:
  console.log(true && 'use this') // if first truthy, return second
  console.log(false && `don't need`) // if first is false, stop there

  // OR (||) operator:
  console.log(false || 'use this') // if first falsy, return second
  console.log(true || `don't need`) // if first true - stop there
}

export default Example
