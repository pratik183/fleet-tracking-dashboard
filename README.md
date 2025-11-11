# 🚛 Fleet Tracking Dashboard

A modern, real-time fleet tracking dashboard built with React 18+ following industry best practices. This application simulates and visualizes fleet tracking data with real-time playback, comprehensive statistics, and an intuitive user interface.

## ✨ Features

- **Real-time Simulation**: Playback control with multiple speed options (1x, 5x, 10x, 50x, 100x)
- **Fleet Overview**: Comprehensive statistics showing trip status across the entire fleet
- **Individual Trip Monitoring**: Detailed cards for each trip with progress tracking
- **Event Timeline**: View recent events for each trip
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🏗️ Architecture

This project follows React best practices with a scalable, maintainable architecture:

```
src/
├── components/          # Reusable UI components
│   ├── Dashboard.jsx
│   ├── FleetSummary.jsx
│   ├── PlaybackControls.jsx
│   └── TripCard.jsx
├── hooks/               # Custom React hooks
│   ├── useSimulation.js
│   └── useTripData.js
├── services/            # API and business logic
│   └── tripService.js
├── utils/               # Helper functions
│   └── eventHelpers.js
├── constants/           # App constants
│   └── index.js
└── styles.css          # Global styles
```

### Key Design Patterns

- **Custom Hooks**: Separation of concerns with `useTripData` and `useSimulation`
- **Service Layer**: Business logic abstracted in `tripService`
- **Pure Utility Functions**: Stateless helper functions in `eventHelpers`
- **Component Composition**: Small, focused components with single responsibilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd FleetTrackingDashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📊 Data Structure

The dashboard processes real fleet tracking data with the following event types:

- **Trip Lifecycle**: `trip_started`, `trip_completed`, `trip_cancelled`
- **Location Events**: `location_ping`, `signal_lost`, `signal_recovered`
- **Vehicle State**: `vehicle_stopped`, `vehicle_moving`, `speed_violation`
- **Telemetry**: `vehicle_telemetry`, `device_error`
- **Warnings**: `battery_low`, `fuel_level_low`
- **Fuel Events**: `refueling_started`, `refueling_completed`

See `ARCHITECTURE.md` for detailed documentation on the data structure and event types.

## 🎨 UI/UX Features

### Fleet Summary Dashboard
- Real-time statistics with color-coded cards
- Total trips, completed, in-progress, cancelled, and not-started counts
- Animated counters and smooth transitions

### Trip Cards
- Individual trip monitoring with progress bars
- Real-time location and speed updates
- Event timeline with expand/collapse functionality
- Status badges (In Progress, Completed, Cancelled, Not Started)

### Playback Controls
- Play/Pause simulation
- Speed control (1x to 100x)
- Reset functionality
- Intuitive icons and visual feedback

## 🔧 Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Vanilla CSS**: Custom styling with CSS variables and modern techniques
- **JavaScript ES6+**: Modern JavaScript features

## 📈 Performance Optimizations

- Efficient event filtering with single-pass algorithms
- Memoized calculations where appropriate
- Lazy evaluation of expensive operations
- Optimized re-renders with proper state management

## 🧪 Code Quality

- **Clean Code**: Self-documenting with clear naming conventions
- **JSDoc Comments**: Comprehensive function documentation
- **Error Handling**: Robust loading and error states
- **Responsive**: Mobile-first design approach

## 🎯 Best Practices Implemented

1. **Component Design**
   - Functional components with hooks
   - Single responsibility principle
   - Props destructuring for clarity

2. **State Management**
   - Custom hooks for complex logic
   - Lifted state for shared data
   - Local state for UI concerns

3. **Code Organization**
   - Clear folder structure
   - Separated concerns (UI, logic, data)
   - Modular, reusable code

4. **Performance**
   - Efficient data structures
   - Controlled re-renders
   - Optimized event processing

5. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support

## 📚 Documentation

- **README.md** (this file): Project overview and getting started
- **ARCHITECTURE.md**: Detailed architecture and best practices guide
- **Fleet Tracking Event Types**: Reference for all event types (in assessment data)

## 🚀 Deployment

This app can be deployed to:

- **Vercel**: `npm run build` and deploy `dist/` folder
- **Netlify**: Connect repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Deploy the `dist/` folder after build

### Deployment Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# The dist/ folder contains the production build
```

## 🎓 Learning Resources

For more information on the architecture and best practices used:

1. Read `ARCHITECTURE.md` for detailed explanations
2. Check the inline code comments for implementation details
3. Review the `hooks/` folder for custom hook patterns
4. Examine the `services/` layer for business logic separation

## 📝 License

This project is part of the MapUp Fleet Tracking Assessment.

## 🤝 Contributing

This is an assessment project. Please refer to the assessment guidelines for submission instructions.

---

**Built with ❤️ using React Best Practices** | [View Live Demo](#) | [Documentation](./ARCHITECTURE.md)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
