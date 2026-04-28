import { ChildComponents } from './ChildComponents.jsx'
import { useState } from 'react'

export const ParentComponents = ({ message }) => {
  const [ count, setCount ] = useState(0)

  const increment = () => setCount(count + 1)

  return <>
    <ChildComponents m1={message} onIncrement={increment}/>
    <p>Count: {count}</p>
  </>
}