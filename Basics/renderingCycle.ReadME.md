# React Rendering Cycle
1. The rendering cycle is a process which react use to update the UI when component state/data/props changes.
2. It involves rendering component into the VDOM, comparing them with the previous VDOM to new VDOM (Diffing), updating only the changes into the actual DOM (reconciliation).

### Syntax / Example
```
import {useState} from 'react'

const Counter = () =>{
    const [count,setCount] = useState(0)
    return(

        <p> Count : {count} </p>
        <button onClick={()=> setCount(count + 1)} >
        Increase
        </button>
        <button onClick={()=> setCount(count-1)}>
        Decrease
        </button>
    )
}
// Every Time `setCount` is called then the rendering cycle runs again for this component and update the state value (eg; 0 , 1, 2,3) 
```

### Why Use Rendering Cycle
> Ensures UI stays in sync with application state.
> Provides efficient updates by avoiding full page reloads.
> Keeps apps interactive and responsive without manual DOM manipulation.

### How works
1. **Trigger Phase** : state changes / props changes / force updates
2. **Render phase** : React Calls the render function or js component body, then produce a new VDOM tree(JS obj)
3. **Diffing** : Compare previous VDOM and new VDOM, find minimal number of changes using diff algorithm
4. **Reconciliation** : React update the real DOM with only the changes 


