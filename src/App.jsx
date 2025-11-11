import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import PlaybackControls from './components/PlaybackControls.jsx';
import { useTripData } from './hooks/useTripData';
import { useSimulation } from './hooks/useSimulation';
import './styles.css';

function App() {
  // Custom hooks for data and simulation management
  const { tripData, loading, error } = useTripData();
  const { simTime, speed, setSpeed, isPlaying, togglePlayback, reset } = useSimulation(1, tripData);

  // Handle loading state
  if (loading) {
    return (
      <div className="app-root loading">
        <div className="loading-spinner">
          <h2>🚛 Loading Fleet Data...</h2>
          <p>Initializing trip monitoring system</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="app-root error">
        <div className="error-message">
          <h2>⚠️ Error Loading Data</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-root">
            <header>
        <h1>� Fleet Tracking Dashboard</h1>
        <p>Real-time Fleet Management & Monitoring System</p>
      </header>

      <PlaybackControls 
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        togglePlayback={togglePlayback}
        reset={reset}
        simTime={simTime}
      />

      <Dashboard tripData={tripData} simTime={simTime} />
    </div>
  );
}

export default App;
