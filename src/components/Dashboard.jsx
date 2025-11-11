import React from 'react';
import FleetSummary from './FleetSummary.jsx';
import TripCard from './TripCard.jsx';

function Dashboard({ tripData, simTime }) {
  if (!tripData || tripData.length === 0) {
    return (
      <div className="dashboard-loading">
        <p>⏳ Loading trip data...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <FleetSummary tripData={tripData} simTime={simTime} />
      
      <div className="trip-cards-container">
        <h2 className="section-title">📍 Individual Trip Details</h2>
        <div className="trip-cards">
          {tripData.map((trip, idx) => (
            <TripCard key={idx} trip={trip} simTime={simTime} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
