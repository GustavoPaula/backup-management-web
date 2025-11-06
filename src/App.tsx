import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={handleCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
