import React, { createContext, useState, useEffect, useRef } from 'react';

// Create a context for GPS data
export const GPSContext = createContext();

export const GPSProvider = ({ children }) => {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState('');
  const lastPositionRef = useRef(null);

  useEffect(() => {
    const fetchGPSData = async () => {
      try {
        const response = await fetch('http://172.20.10.3/gps');
        const gpsData = await response.json();

        if (gpsData.latitude && gpsData.longitude) {
          const lat = parseFloat(gpsData.latitude);
          const lng = parseFloat(gpsData.longitude);
          const newPosition = [lat, lng];

          setPosition(newPosition);
          lastPositionRef.current = newPosition;

          const locationResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
          const locationData = await locationResponse.json();

          if (locationData && locationData.display_name) {
            setLocationName(locationData.display_name);
          } else {
            setLocationName('Unknown Location');
          }
        } else {
          console.error('Invalid GPS data:', gpsData);
        }
      } catch (error) {
        console.error('Error fetching GPS data:', error);
      }
    };

    const intervalId = setInterval(fetchGPSData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!position && lastPositionRef.current) {
      setPosition(lastPositionRef.current);
    }
  }, []);

  return (
    <GPSContext.Provider value={{ position, locationName }}>
      {children}
    </GPSContext.Provider>
  );
};
