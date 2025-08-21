# Component Lifecycle
Component lifecycle in react describes the various stage that react goes through from it creation to its removal from DOM. It has 3 main phases
> Mounting 
> Updating
> Unmounting

**Mounting**
When a component is created and inserted into the DOM

**Updating**
When component's state / props change causing re-render

**Unmounting**
When a component is removed from the DOM

### Example
```
import {useState} from 'react'

function MyComponent(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Mounted or Updated")
        return () =>{
            console.log("Unmounted")
        }
    },[count])

    return(
        <div>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )

}

```

### Why use lifecycle methods
1. Clean up resources (clear intervals, remove event listener)
2. Optimized rendering (memoization)

> Traditionally class components uses specific lifecycle methods for example componentDidMount(), componentDidUpdate(), componentWillUnmount().

> Functional component has similar functionality through react hooks for example useEffect. 