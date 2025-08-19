## JSX (syntax, rules, and differences from HTML)
JSX is a syntax extension that allows developer to write HTML into a js file

> It allows developers to write HTML-like code inside JavaScript which React then transpile into JavaScript function calls `(React.createElement)` using tools like Babel.

### Syntax
```
//JSX looks like HTML but is written inside JavaScript:
const element = <h1>Hello</h1>

// react transpile
const element = React.createElement("h1",null,"Hello");
```


## Why Use JSX
1. Clean Code
2. Combines Logic + UI
3. Powerful expression, write js into `{}`

## How works in background
1. Browsers cannot understand JSX directly
2. So during build React transpile the jsx into pure js object using `React.createElement()`
3. Then React Virtual Dom compare the changes then update the changes into the actual dom

## Rules
> Attributes used Camelcase (eg; onClick, className) instead use HTML lowercase(eg; onclick, class)
> JS logic inside by using `{}`
> self closing tags must be end with `/` (eg; <img/>)

