# Custom Hooks

Rules: name must start with use, can call other hooks.

## Template
```js
function useResource(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  useEffect(() => { /* fetch */ }, [url]);
  return { data, loading, error };
}
```
