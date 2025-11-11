import React from 'react';
import { calculateFleetStats } from '../utils/eventHelpers';

function FleetSummary({ tripData, simTime }) {
  const stats = calculateFleetStats(tripData, simTime);

  return (
    <div className="fleet-summary">
      <h2 className="summary-title">📊 Fleet Overview</h2>
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">🚛</div>
          <div className="stat-content">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total Trips</div>
          </div>
        </div>

        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-value">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>

        <div className="stat-card in-progress">
          <div className="stat-icon">🚗</div>
          <div className="stat-content">
            <div className="stat-value">{stats.inProgress}</div>
            <div className="stat-label">In Progress</div>
          </div>
        </div>

        <div className="stat-card cancelled">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <div className="stat-value">{stats.cancelled}</div>
            <div className="stat-label">Cancelled</div>
          </div>
        </div>

        <div className="stat-card not-started">
          <div className="stat-icon">⏸️</div>
          <div className="stat-content">
            <div className="stat-value">{stats.notStarted}</div>
            <div className="stat-label">Not Started</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FleetSummary;
