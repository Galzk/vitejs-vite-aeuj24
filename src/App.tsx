import { lazy, Suspense } from 'react';
// import LazyComponent from './LazyComponent';
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
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
