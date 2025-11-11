// Simulation speed options
export const SPEED_OPTIONS = [1, 5, 10, 50, 100];

// Event type categories
export const EVENT_TYPES = {
  TRIP_LIFECYCLE: ['trip_started', 'trip_completed', 'trip_cancelled'],
  LOCATION: ['location_ping', 'signal_lost', 'signal_recovered'],
  VEHICLE_STATE: ['vehicle_stopped', 'vehicle_moving', 'speed_violation'],
  TELEMETRY: ['vehicle_telemetry', 'device_error'],
  WARNINGS: ['battery_low', 'fuel_level_low'],
  FUEL: ['refueling_started', 'refueling_completed'],
};

// Trip status types
export const TRIP_STATUS = {
  NOT_STARTED: 'Not Started',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

// Status colors for UI
export const STATUS_COLORS = {
  [TRIP_STATUS.NOT_STARTED]: '#gray',
  [TRIP_STATUS.IN_PROGRESS]: '#1890ff',
  [TRIP_STATUS.COMPLETED]: '#52c41a',
  [TRIP_STATUS.CANCELLED]: '#ff4d4f',
};
