import { Suspense, useState } from 'react';
import LazyComponent from './LazyComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Should load component:</h1>
      <Suspense fallback="Loading...">
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
