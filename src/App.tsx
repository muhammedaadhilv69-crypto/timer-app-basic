import Button from './components/Button';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startedAtRef = useRef(0);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    startedAtRef.current = Date.now() - elapsedRef.current;
    const interval = setInterval(() => {
      const nextElapsed = Date.now() - startedAtRef.current;
      elapsedRef.current = nextElapsed;
      setElapsed(nextElapsed);
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning]);

  const totalSeconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  function resetTimer() {
    setIsRunning(false);
    elapsedRef.current = 0;
    setElapsed(0);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Timer App</h1>
      <div className="timer shadow-2xl bg-gray-200 rounded-lg p-6 flex flex-col justify-center items-center">
        <div className="time shadow-inner shadow-gray-400 p-4 rounded-lg mb-2">
          <span className="text-5xl font-bold">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
        <div className="btn-container flex gap-2 mt-4">
          <Button onClick={() => setIsRunning(true)} disabled={isRunning}>Start</Button>
          <Button onClick={() => setIsRunning(false)} disabled={!isRunning}>Stop</Button>
          <Button onClick={resetTimer}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
