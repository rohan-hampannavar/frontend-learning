# React Interview Questions

### 1. What is the virtual DOM?
A lightweight JS representation of the real DOM. React diffs it and applies minimal real DOM changes.

### 2. Rules of hooks?
Only call at top level (no loops/conditions). Only call inside React function components or custom hooks.

### 3. When does a component re-render?
State change, prop change, context change, or parent re-render.

### 4. useMemo vs useCallback?
useMemo memoises a computed value. useCallback memoises a function reference. Both take a dep array.

### 5. How does useEffect cleanup work?
Return a function from useEffect. Runs before next effect and on unmount. Used for timers, listeners, fetches.

### 6. What is lifting state up?
Moving shared state to the closest common ancestor so multiple children can access it via props.

### 7. What is React.memo?
HOC that prevents re-render unless props actually changed (shallow comparison).

### 8. Controlled vs uncontrolled components?
Controlled: form value in React state. Uncontrolled: value lives in DOM, accessed via ref.

### 9. What is useRef for?
Accessing DOM nodes directly. Storing mutable value that does not trigger re-render.

### 10. When to avoid context?
For high-frequency updates - every consumer re-renders. Use for themes, auth state, locale.
