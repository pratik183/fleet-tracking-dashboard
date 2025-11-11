import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for managing simulation time
 * @param {number} initialSpeed - Initial playback speed multiplier
 * @param {Array} tripData - Trip data to determine start time
 * @returns {Object} { simTime, speed, setSpeed, isPlaying, togglePlayback, reset }
 */
export function useSimulation(initialSpeed = 1, tripData = []) {
  // Find the earliest timestamp from all trips to start simulation
  const getInitialSimTime = () => {
    if (!tripData || tripData.length === 0) {
      return new Date('2025-11-03T08:00:00.000Z').getTime();
    }
    
    let earliest = Infinity;
    tripData.forEach(trip => {
      if (trip.events && trip.events.length > 0) {
        const firstEvent = trip.events[0];
        const timestamp = new Date(firstEvent.timestamp).getTime();
        if (timestamp < earliest) {
          earliest = timestamp;
        }
      }
    });
    
    return earliest === Infinity ? new Date('2025-11-03T08:00:00.000Z').getTime() : earliest;
  };

  const [simTime, setSimTime] = useState(getInitialSimTime());
  const [speed, setSpeed] = useState(initialSpeed);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const initialTimeRef = useRef(getInitialSimTime());

  // Update initial time when trip data loads
  useEffect(() => {
    if (tripData && tripData.length > 0) {
      const newInitialTime = getInitialSimTime();
      initialTimeRef.current = newInitialTime;
      setSimTime(newInitialTime);
    }
  }, [tripData.length]); // Only re-run when data is loaded

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSimTime((prev) => prev + 1000 * speed);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [speed, isPlaying]);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  const reset = () => {
    setSimTime(initialTimeRef.current);
    setIsPlaying(true);
  };

  return {
    simTime,
    speed,
    setSpeed,
    isPlaying,
    togglePlayback,
    reset,
  };
}
