import { useEffect, useState } from "react"

export const UseEffect = () => {

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(
      count+1
    )
  }

  useEffect(()=> {
    console.log("Mei wapas aaunga");

    return () => {
      console.log("Component Unmounted");
    }
  }, [count])

  return (
    <>
      <h1>Hello UseEffect</h1>
      <p>Count : {count}</p>
      <button onClick={handleInc}>Increment</button>
    </>
  )
}
