# React Components

React Components are used to building block in a application. They are reuseable piece of code / structure that can handle both logic and UI

> Components are two types `class` & `function` component

## Function component

1. Function component are the js function
2. A JS function that return JSX
3. Uses React Hooks for state and lifecycle method

### Syntax

```
export const FunComp = () =>{
    return(
        <></>
    )
}
```

### Example with state using Hooks

```
import {useState} 'react'

function counter(){
    const [count, setCount] = useState(0)
    return(
<>
<p>
Count : {count}
</p>
<button onClick={()=> setCount(count+1)} >
click
</button>
</>
    )
}
```

## Class Component
1. Old method before ES6
2. manage state with `this.state` and lifeCycle method (`componentDidMount()`) method

### example
```
import {Component} from 'react'
class Greeting extends Component{
render(){
    return <h1> Hello, {this.props.name} </h1>
}
}

```