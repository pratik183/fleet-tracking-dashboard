# 🚗 Fleet Tracking Dashboard

A comprehensive real-time fleet tracking dashboard that simulates vehicle movements and monitors trip events across multiple routes. Built as part of the MapUp assessment challenge.

## 🌟 Features

- **Real-Time Simulation**: Playback trip events with adjustable speed (1x-100x)
- **Multi-Trip Monitoring**: Track 5 simultaneous trips across different routes
- **Event Timeline**: Monitor location pings, speed violations, fuel levels, and technical events
- **Fleet Analytics**: Live statistics showing completed, in-progress, and cancelled trips
- **Responsive Design**: Modern UI with gradient cards, progress bars, and mobile-first layout
- **Dynamic Data**: Generated trip data from real-world routes using OSRM API

## 📊 Trip Scenarios

1. **Cross-Country Long Haul** - Transcontinental freight delivery
2. **Urban Dense Delivery** - City route with frequent location updates
3. **Mountain Route Cancelled** - High-altitude route with weather cancellation
4. **Southern Technical Issues** - Route with device and vehicle technical events
5. **Regional Logistics** - Regional delivery with fuel management

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Modern CSS with CSS Variables, Flexbox, Grid
- **Architecture**: Custom hooks, service layer, utility functions
- **Data Generator**: Node.js scripts using OSRM routing API
- **Event System**: 15+ event types (location, telemetry, fuel, battery, etc.)

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/fleet-tracking-dashboard.git

# Navigate to project
cd fleet-tracking-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the dashboard.

## 📁 Project Structure

```
fleet-tracking-dashboard/
├── src/
│   ├── components/       # React components (Dashboard, FleetSummary, TripCard)
│   ├── hooks/           # Custom hooks (useSimulation, useTripData)
│   ├── services/        # Data fetching and business logic
│   ├── utils/           # Helper functions for event processing
│   └── constants/       # Configuration and constants
├── public/
│   └── assessment-fallback-data/  # 5 pre-generated trip JSON files
├── data-generator/      # Node.js scripts to generate custom trip data
└── docs/               # Architecture and quick start guides
```

## 🎮 How to Use

1. **Load Dashboard**: Data loads automatically from 5 trip JSON files
2. **Control Simulation**: 
   - Click **Play** to start simulation
   - Adjust speed with 1x, 5x, 10x, 50x, 100x buttons
   - Click **Pause** to stop
   - Click **Reset** to restart from beginning
3. **Monitor Trips**: 
   - View fleet-wide statistics in summary cards
   - Expand individual trip cards for detailed event logs
   - Track real-time location, speed, fuel, and battery levels

## 🔧 Generate Custom Data

```bash
cd data-generator
npm install
npm run generate
```

This creates unique trip data with randomized routes using real-world road networks.

## 📚 Event Types

The system tracks 15+ event types:
- Location pings with GPS coordinates
- Trip lifecycle (started, completed, cancelled)
- Speed violations
- Fuel level monitoring and refueling
- Battery status and charging
- Signal quality (lost/recovered)
- Vehicle telemetry
- Device errors

## 🎯 Key Features

- **Temporal Filtering**: Events appear progressively as simulation time advances
- **Progress Tracking**: Visual progress bars and percentage completion
- **Status Indicators**: Color-coded trip states (completed, in-progress, cancelled)
- **Event History**: Expandable timeline showing last 5 events per trip
- **Responsive Stats**: Real-time updates to fleet-wide metrics

## 🏗️ Architecture Highlights

- **Custom Hooks**: Separation of state logic from UI components
- **Service Layer**: Centralized data fetching and transformation
- **Pure Functions**: Testable utility functions for event processing
- **Component Composition**: Small, focused, reusable components
- **Modern CSS**: Variables, animations, responsive design without frameworks

## 📖 Documentation

- [Architecture Guide](ARCHITECTURE.md) - Detailed React best practices
- [Quick Start](QUICK_START.md) - Pattern reference and code snippets
- [Event Types Reference](public/assessment-fallback-data/) - Complete event schema

## 🎓 Learning Outcomes

This project demonstrates:
- Real-time data simulation and temporal filtering
- React hooks for complex state management
- Service-oriented architecture in frontend
- Event-driven data processing
- Responsive UI design principles
- Clean code organization and documentation

## 📄 License

MIT License - feel free to use for learning and portfolio purposes

## 🤝 Contributing

This is an assessment project, but suggestions and improvements are welcome!

## 👤 Author

Pratik Jawale
- GitHub: [@pratikjawale]([https://github.com/pratikjawale](https://github.com/pratik183))

## 🙏 Acknowledgments

- MapUp for the assessment challenge
- OSRM Project for routing data
- React team for excellent documentation
