import React, { useState } from 'react'

function UseStateHookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
  return (
    <>
    <div>
        <h1>Count: {count}</h1>
    </div>
    <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement </button>

    </div>
    </>
  )
}

export default UseStateHookCounter2