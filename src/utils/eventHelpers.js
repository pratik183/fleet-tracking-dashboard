/**
 * Filter events by simulation time
 * @param {Array} events - Array of event objects
 * @param {number} simTime - Current simulation timestamp
 * @returns {Array} Filtered events
 */
export function filterEventsBySimTime(events, simTime) {
  if (!events || !Array.isArray(events)) return [];
  return events.filter((ev) => new Date(ev.timestamp).getTime() <= simTime);
}

/**
 * Get trip progress status and percentage
 * @param {Array} events - Filtered events for a trip
 * @returns {Object} { status: string, percent: number|null }
 */
export function getTripProgress(events) {
  if (!events || events.length === 0) {
    return { status: 'Not Started', percent: 0 };
  }

  // Find key events
  const start = events.find((ev) => ev.event_type === 'trip_started');
  const completed = events.find((ev) => ev.event_type === 'trip_completed');
  const cancelled = events.find((ev) => ev.event_type === 'trip_cancelled');

  if (completed) {
    return { status: 'Completed', percent: 100 };
  }

  if (cancelled) {
    return { status: 'Cancelled', percent: null };
  }

  if (start && events.length > 1) {
    // Estimate progress based on timeline
    const startTime = new Date(start.timestamp).getTime();
    const lastEventTime = new Date(events[events.length - 1].timestamp).getTime();
    
    // Get the total planned duration from trip_started event
    const plannedDuration = start.estimated_duration_hours * 3600000; // Convert to milliseconds
    
    if (plannedDuration > 0) {
      const elapsed = lastEventTime - startTime;
      let percent = Math.floor((elapsed / plannedDuration) * 100);
      percent = Math.min(percent, 100); // Cap at 100%
      return { status: 'In Progress', percent };
    }
  }

  return { status: 'Not Started', percent: 0 };
}

/**
 * Get the last location event from filtered events
 * @param {Array} events - Filtered events
 * @returns {Object|null} Last location event or null
 */
export function getLastLocation(events) {
  if (!events || events.length === 0) return null;
  
  // Find the last event with location data
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].location) {
      return events[i];
    }
  }
  
  return null;
}

/**
 * Calculate fleet-wide statistics
 * @param {Array} tripData - Array of trip objects
 * @param {number} simTime - Current simulation time
 * @returns {Object} Fleet statistics
 */
export function calculateFleetStats(tripData, simTime) {
  const stats = {
    total: tripData.length,
    completed: 0,
    inProgress: 0,
    cancelled: 0,
    notStarted: 0,
  };

  tripData.forEach((trip) => {
    const events = filterEventsBySimTime(trip.events, simTime);
    const { status } = getTripProgress(events);

    switch (status) {
      case 'Completed':
        stats.completed++;
        break;
      case 'In Progress':
        stats.inProgress++;
        break;
      case 'Cancelled':
        stats.cancelled++;
        break;
      case 'Not Started':
        stats.notStarted++;
        break;
      default:
        break;
    }
  });

  return stats;
}
