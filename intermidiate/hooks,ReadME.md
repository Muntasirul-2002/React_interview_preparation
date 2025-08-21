# Hooks in react

Hooks let you use different react features from your component, you can use built-in hook or can create your own hooks.

## Built-in hooks are

`useState`, `useEffect`, `useRef`, `useReducer`, `useMemo`, `useLayout`, `useCallback`, `useContext`

## State Hooks

### useState

It it used to handle or manage the states / data over a component.
**Syntax** :
`const [value, function] = useState(initialValue)`

### Real life scenario:

Example scenario: Handling a controlled form input. For instance, tracking a text input’s value for a search bar or login form. Each keystroke updates component state via setState, and the UI stays in sync. This is extremely common in real apps (forms, counters, show/hide details, etc.).

##################################################################

### useReducer

useReducer is like useState but for complex state logic, it lets you manage the state via reducer function such as Redux. use only when state logic involves multiple sub-values or the next state depends on the previous one.
### Example scenario: 
Managing form data with validation, or a todo list with multiple actions (add, delete, toggle). For example, a todo app where each action (add/remove/toggle) changes state; a reducer cleanly encapsulates that logic rather than multiple useState calls.

**Syntax** :
`const [state, dispatch] = useReducer(reducer, initialArg, init?)`

> [state, dispatch] : A pure function that takes the current state and a action, and return a new state
> initialArg : The initial state value
> init : it is optional, if provided, used to compute the initial state lazily
> **returns**: [state, dispatch]. state is the current state & dispatch trigger a state update by calling reducer

##################################################################

## Effect Hooks

### useEffect

useEffect let you describe to manage the side effect after the component render. it synchronizes a component with the external links / system such as Apis, timers, DOM updates. with a dependency array you can limit when it runs.

### Real-life uses and scenario:

Fetching data from an API when a component mounts or when a query parameter changes. For instance, loading user data or search results after the component appears on screen. useEffect is commonly used for data fetching, subscribing/unsubscribing to events, or updating the document title after render

**Syntax**:

```
useEffect(()=> {},[])
```

##################################################################

## Ref Hooks

### useRef

useRef provides a mutable object whose `.current` property persists for the full lifetime of the component. it lets you hold a values like DOM nodes or any mutable data that don't trigger renders when changed. commonly used to keeping previous value, storing timers/intervals IDs.

### Real life scenario

Focusing an input element when a component mounts or after a particular event, for example, an email input that auto focuses on the form load. you can assign the `ref` to the jsx element, then call the method `ref.current.focus()`

##################################################################

## Context Hooks

### useContext

The useContext hook is a part of React’s hooks API introduced in React 16.8. It allows components to consume state or context without the need for prop drilling, which can lead to cleaner and more maintainable code. Context provides a way to share values like themes, user authentication status, or preferred language across the component tree without having to pass props down manually at every level.

### Example Scenario

Managing a theme (light/dark mode) or user authentication. for example you may need user authenticated data across the whole application such as in profile / home page / admin panel etc. you can use useContext. for storing that data globally and used that data via Context api

### Using useContext in Practice

Let's dive into a simple example to understand how useContext works. suppose we have a React application with a theme context that control the appearance of our components. First we'll create a context using `React.createContext()`

```
import React from 'react'

const ThemeContext = React.createContext('light')

export default ThemeContext;

```

Now, we can create a provider component for wrap our application for supply the theme context across the application

```
import React from 'react'
import ThemeContext from './themeContext'

const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light")
    const toggleTheme = () =>{
        setTheme(theme == "light" ? "dark" : "light")
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}} >
        {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext;
```

Now, any component from the application can use the theme context using the useContext hook

```
const ThemeButton = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <button onClick={toggleTheme} style={{background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "333" : "#fff" }} >
        Toggle Theme
        </button>
    )
}
```
## Performance Hooks
### useMemo
useMemo memoizes ("caches") a computed value between renders. you pass a function that does a calculation with a dependency array; it's only recalculate when the dependencies change. useMemo useful for large computational data processing.
> useMemo lets you cache the result of an expensive calculation result

### Example scenario
Filtering a large list of product based on user input. for example, you have an array of 10000+ products and want to filter by search term. without useMemo the filter would run on every keypress or parent update. with useMemo the filtering only re-run when the list or query change.

### useCallback
useCallback is similar to useMemo but for function, it returns a memoized version of callback function that only changes if its dependencies change.
### Example scenario:
You have a parent component rendering a list of child items. Each child receives an onClick handler prop from the parent. Without useCallback, every render creates a new function, causing even React.memo children to re-render. With useCallback, you can keep the same function instance across renders unless its dependencies change.

#####################################################################
### useTransition
introduced in React 18, useTransition helps keep the UI responsive during the expensive update by making them non-urgent transition. it returns `[isPending, startTransition]`.
### Example Scenario
Filtering a large list or switching tabs with heavy content. for example, typing into a search box that filters thousand of items. you can wrap the filter update in a transition so that text input remains responsive. meanwhile you can show a loading indicators while the background update is in progress.