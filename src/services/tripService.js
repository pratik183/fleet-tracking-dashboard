// API Service for loading trip data
const API_BASE_URL = '/assessment-fallback-data';

export const tripService = {
  /**
   * Load all trip data files
   * @returns {Promise<Array>} Array of trip data
   */
  async loadAllTrips() {
    const files = [
      'trip1crosscountry.json',
      'trip2urbandense.json',
      'trip3mountaincancelled.json',
      'trip4southerntechnical.json',
      'trip5regionallogistics.json',
    ];

    try {
      const responses = await Promise.all(
        files.map(async (filename) => {
          const response = await fetch(`${API_BASE_URL}/${filename}`);
          if (!response.ok) {
            throw new Error(`Failed to load ${filename}`);
          }
          const events = await response.json(); // This is already an array of events
          return {
            filename,
            events, // Direct array of events
            tripName: this.getTripName(filename),
          };
        })
      );
      return responses;
    } catch (error) {
      console.error('Error loading trip data:', error);
      throw error;
    }
  },

  /**
   * Get friendly trip name from filename
   * @param {string} filename 
   * @returns {string}
   */
  getTripName(filename) {
    const names = {
      'trip1crosscountry.json': 'Cross-Country Long Haul',
      'trip2urbandense.json': 'Urban Dense Delivery',
      'trip3mountaincancelled.json': 'Mountain Route (Cancelled)',
      'trip4southerntechnical.json': 'Southern Technical Issues',
      'trip5regionallogistics.json': 'Regional Logistics',
    };
    return names[filename] || filename;
  },
};
