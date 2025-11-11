import { useState, useEffect } from 'react';
import { tripService } from '../services/tripService';

/**
 * Custom hook for loading and managing trip data
 * @returns {Object} { tripData, loading, error }
 */
export function useTripData() {
  const [tripData, setTripData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const data = await tripService.loadAllTrips();
        
        if (isMounted) {
          setTripData(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { tripData, loading, error };
}
