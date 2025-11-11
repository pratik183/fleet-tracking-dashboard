import React, { useState } from 'react';
import { filterEventsBySimTime, getTripProgress, getLastLocation } from '../utils/eventHelpers';

function TripCard({ trip, simTime }) {
  const [showEvents, setShowEvents] = useState(false);
  
  const events = filterEventsBySimTime(trip.events, simTime);
  const progress = getTripProgress(events);
  const lastLoc = getLastLocation(events);

  // Get status class for styling
  const getStatusClass = (status) => {
    return status.toLowerCase().replace(' ', '-');
  };

  // Format recent events
  const recentEvents = events.slice(-5).reverse();

  return (
    <div className={`trip-card status-${getStatusClass(progress.status)}`}>
      <div className="trip-header">
        <h3 className="trip-name">{trip.tripName || trip.routeName}</h3>
        <span className={`status-badge ${getStatusClass(progress.status)}`}>
          {progress.status}
        </span>
      </div>

      <div className="trip-progress">
        {progress.percent !== null && (
          <>
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progress.percent}%` }}
              />
            </div>
            <span className="progress-text">{progress.percent}%</span>
          </>
        )}
        {progress.percent === null && (
          <span className="progress-text">--</span>
        )}
      </div>

      {lastLoc && (
        <div className="trip-details">
          <div className="detail-row">
            <span className="detail-label">📍 Location:</span>
            <span className="detail-value">
              {lastLoc.location.lat.toFixed(4)}, {lastLoc.location.lng.toFixed(4)}
            </span>
          </div>
          {lastLoc.movement && (
            <>
              <div className="detail-row">
                <span className="detail-label">🚗 Speed:</span>
                <span className="detail-value">
                  {lastLoc.movement.speed_kmh?.toFixed(1) || '-'} km/h
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">🧭 Heading:</span>
                <span className="detail-value">
                  {lastLoc.movement.heading_degrees?.toFixed(0) || '-'}°
                </span>
              </div>
            </>
          )}
          <div className="detail-row">
            <span className="detail-label">📡 Events:</span>
            <span className="detail-value">{events.length}</span>
          </div>
        </div>
      )}

      {!lastLoc && (
        <div className="no-data">
          <p>⏳ Waiting for trip to start...</p>
        </div>
      )}

      <button 
        className="toggle-events-btn"
        onClick={() => setShowEvents(!showEvents)}
      >
        {showEvents ? '▼ Hide Recent Events' : '▶ Show Recent Events'}
      </button>

      {showEvents && (
        <div className="events-list">
          <h4>Recent Events:</h4>
          {recentEvents.length > 0 ? (
            <ul>
              {recentEvents.map((ev) => (
                <li key={ev.event_id} className="event-item">
                  <span className="event-type">[{ev.event_type}]</span>
                  <span className="event-time">
                    {new Date(ev.timestamp).toLocaleTimeString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No events yet</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TripCard;
