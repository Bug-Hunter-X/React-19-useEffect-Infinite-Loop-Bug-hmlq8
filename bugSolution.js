```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array to prevent infinite loop
    // The effect runs only when count changes
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```