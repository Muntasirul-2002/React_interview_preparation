# State Management
State = data that changes over time in a component
State management = The way that react reading, updating, manage data across component

### How Works in Background
Each component has its own isolated state.
When setState (or useState) is called:
React marks the component as dirty.
React re-renders only that component (and its children if needed).
New Virtual DOM is created → compared (diffing) → Real DOM updated.