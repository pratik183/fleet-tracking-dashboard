import React from 'react';
import { SPEED_OPTIONS } from '../constants';

function PlaybackControls({ speed, setSpeed, isPlaying, togglePlayback, reset, simTime }) {
  // Format simulation time for display
  const formatSimTime = (timestamp) => {
    if (!timestamp) return 'Loading...';
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="playback-controls">
      <div className="control-group">
        <span className="control-label">⏯️ Playback:</span>
        <button 
          onClick={togglePlayback} 
          className={`control-btn ${isPlaying ? 'playing' : 'paused'}`}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <button 
          onClick={reset} 
          className="control-btn reset"
          title="Reset simulation"
        >
          🔄 Reset
        </button>
      </div>

      <div className="control-group sim-time">
        <span className="control-label">🕐 Simulation Time:</span>
        <span className="sim-time-display">{formatSimTime(simTime)}</span>
      </div>

      <div className="control-group">
        <span className="control-label">⚡ Speed:</span>
        {SPEED_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setSpeed(s)}
            className={`speed-btn ${speed === s ? 'active' : ''}`}
            title={`${s}x speed`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlaybackControls;
