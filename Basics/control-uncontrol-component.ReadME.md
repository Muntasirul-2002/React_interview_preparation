# Control & UnControl Component

Control - Form inputs are control by react state
UnControl - Form inputs are handle by DOM itself , React uses refs to access input values when needed.

### Example Control
```
import React, {useState} from 'react'

const ControlComponent = () =>{
    const [name,setName] = useState("")

    const handleChangedName = (e) =>{
        e.preventDefault()
        alert("name", name)
    }

    return(
        <div>
        <input name={name} onchange={()=> setName(e.target.value)}  />
        </div>
    )
}

```

### Example UnControl
```
import React, {useRef} from 'react'

const UnControl = () =>{
    const nameRef = useRef()
    const handleNameChanged = (e)=>{
        e.preventDefault()
        alert("name", nameRef.current.value)
    }
    return(
        <div>
        <form onSubmit={handleNameChanged} >
        <input ref={nameRef} />
        </form>
        </div>
    )
}

```

### Why use 
Control - When you need validation, instant feedback
UnControl - When forms are simple or integrated with non-React Code

