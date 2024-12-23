// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Header from './Header'; 

// const GPSData = () => {
//   const [position, setPosition] = useState([5.75942, 0.31683]); // Default position (latitude, longitude)

//   useEffect(() => {
//     // Simulate fetching GPS data from your backend or hardware
//     const fetchGPSData = () => {
//       // Replace this with actual GPS data fetching logic
//       const gpsData = { latitude: 5.75942, longitude: 0.31683 };
//       setPosition([gpsData.latitude, gpsData.longitude]);
//     };

//     fetchGPSData();
//   }, []);

//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
//       style={{
//         fontFamily: 'Inter, "Noto Sans", sans-serif',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="layout-container flex h-full grow flex-col bg-black bg-opacity-50">
//         <Header title="GPS" />

//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-6">
//             <header className="mb-0">
//               <h1 className="text-2xl font-bold text-white">GPS Data</h1>
//               <p className="text-gray-400">Real-time GPS location of the robot</p>
//             </header>
//             <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
//               <MapContainer center={position} zoom={13} className="h-96 w-full rounded-lg">
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position}>
//                   <Popup>
//                     Robot Location: <br /> {`Latitude: ${position[0]}, Longitude: ${position[1]}`}
//                   </Popup>
//                 </Marker>
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPSData;



//2
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Header from './Header';

// // Define a custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const GPSData = () => {
//   // State to store position data
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     const fetchGPSData = async () => {
//       try {
//         // Replace with your local IP address of the ESP32
//         const response = await fetch('http://172.20.10.3/gps');
        
//         // Parse the JSON response
//         const gpsData = await response.json();
//         console.log('Fetched GPS Data:', gpsData);

//         // Update position state if valid data is received
//         if (gpsData.latitude && gpsData.longitude) {
//           setPosition([parseFloat(gpsData.latitude), parseFloat(gpsData.longitude)]);
//         } else {
//           console.error('Invalid GPS data:', gpsData);
//         }
//       } catch (error) {
//         console.error('Error fetching GPS data:', error);
//       }
//     };

//     // Fetch GPS data every 10 seconds
//     const intervalId = setInterval(fetchGPSData, 1000);
//     return () => clearInterval(intervalId); // Clean up on unmount
//   }, []);

//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
//       style={{
//         fontFamily: 'Inter, "Noto Sans", sans-serif',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="layout-container flex h-full grow flex-col bg-black bg-opacity-50">
//         <Header title="GPS" />
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-6">
//             <header className="mb-0">
//               <h1 className="text-2xl font-bold text-white">GPS Data</h1>
//               <p className="text-gray-400">Real-time GPS location of the robot</p>
//             </header>
//             <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
//               <MapContainer center={position || [0, 0]} zoom={13} className="h-96 w-full rounded-lg">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {position && (
//                   <Marker position={position} icon={customIcon}>
//                     <Popup>
//                       Robot Location: <br /> Latitude: {position[0]}, Longitude: {position[1]}
//                     </Popup>
//                   </Marker>
//                 )}
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPSData;



//3
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Header from './Header';

// // Define a custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const GPSData = () => {
//   // State to store position data and location name
//   const [position, setPosition] = useState(null);
//   const [locationName, setLocationName] = useState('');

//   useEffect(() => {
//     const fetchGPSData = async () => {
//       try {
//         const response = await fetch('http://172.20.10.3/gps');
//         const gpsData = await response.json();

//         if (gpsData.latitude && gpsData.longitude) {
//           const lat = parseFloat(gpsData.latitude);
//           const lng = parseFloat(gpsData.longitude);
//           setPosition([lat, lng]);

//           // Reverse geocoding to get location name
//           const locationResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
//           const locationData = await locationResponse.json();

//           if (locationData && locationData.display_name) {
//             setLocationName(locationData.display_name);
//           } else {
//             setLocationName('Unknown Location');
//           }
//         } else {
//           console.error('Invalid GPS data:', gpsData);
//         }
//       } catch (error) {
//         console.error('Error fetching GPS data:', error);
//       }
//     };

//     // Fetch GPS data every second
//     const intervalId = setInterval(fetchGPSData, 1000);
//     return () => clearInterval(intervalId); // Clean up on unmount
//   }, []);

//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
//       style={{
//         fontFamily: 'Inter, "Noto Sans", sans-serif',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="layout-container flex h-full grow flex-col bg-black bg-opacity-50">
//         <Header title="GPS" />
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-6">
//             <header className="mb-0">
//               <h1 className="text-2xl font-bold text-white">GPS Data</h1>
//               <p className="text-gray-400">Real-time GPS location of the robot</p>
//             </header>
//             <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
//               <MapContainer center={position || [0, 0]} zoom={13} className="h-96 w-full rounded-lg">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {position && (
//                   <Marker position={position} icon={customIcon}>
//                     <Popup>
//                        <strong>Location:</strong> {locationName} <br />
//                       <strong>Latitude:</strong> {position[0]} <br />
//                       <strong>Longitude:</strong> {position[1]}
//                     </Popup>
//                   </Marker>
//                 )}
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPSData;



//4
// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Header from './Header';

// // Define a custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const GPSData = () => {
//   // State to store position data and location name
//   const [position, setPosition] = useState(null);
//   const [locationName, setLocationName] = useState('');

//   // Ref to store the last known position
//   const lastPositionRef = useRef(null);

//   useEffect(() => {
//     const fetchGPSData = async () => {
//       try {
//         const response = await fetch('http://172.20.10.3/gps');
//         const gpsData = await response.json();

//         if (gpsData.latitude && gpsData.longitude) {
//           const lat = parseFloat(gpsData.latitude);
//           const lng = parseFloat(gpsData.longitude);
//           const newPosition = [lat, lng];

//           // Store the new position in both state and ref
//           setPosition(newPosition);
//           lastPositionRef.current = newPosition;

//           // Reverse geocoding to get location name
//           const locationResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
//           const locationData = await locationResponse.json();

//           if (locationData && locationData.display_name) {
//             setLocationName(locationData.display_name);
//           } else {
//             setLocationName('Unknown Location');
//           }
//         } else {
//           console.error('Invalid GPS data:', gpsData);
//         }
//       } catch (error) {
//         console.error('Error fetching GPS data:', error);
//       }
//     };

//     // Fetch GPS data every second
//     const intervalId = setInterval(fetchGPSData, 1000);
//     return () => clearInterval(intervalId); // Clean up on unmount
//   }, []);

//   // Immediately show the last known position if available
//   useEffect(() => {
//     if (!position && lastPositionRef.current) {
//       setPosition(lastPositionRef.current);
//     }
//   }, []);

//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
//       style={{
//         fontFamily: 'Inter, "Noto Sans", sans-serif',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="layout-container flex h-full grow flex-col bg-black bg-opacity-50">
//         <Header title="GPS" />
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-6">
//             <header className="mb-0">
//               <h1 className="text-2xl font-bold text-white">GPS Data</h1>
//               <p className="text-gray-400">Real-time GPS location of the robot</p>
//             </header>
//             <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
//               <MapContainer center={position || [0, 0]} zoom={13} className="h-96 w-full rounded-lg">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {position && (
//                   <Marker position={position} icon={customIcon}>
//                     <Popup>
//                       <strong>Location:</strong> {locationName} <br />
//                       <strong>Latitude:</strong> {position[0]} <br />
//                       <strong>Longitude:</strong> {position[1]}
//                     </Popup>
//                   </Marker>
//                 )}
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPSData;


//5
// import React, { useContext } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Header from './Header';
// import { GPSContext } from './GPSContext';

// // Define a custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const GPSData = () => {
//   const { position, locationName } = useContext(GPSContext);

//   return (
//     <div
//       className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
//       style={{
//         fontFamily: 'Inter, "Noto Sans", sans-serif',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="layout-container flex h-full grow flex-col bg-black bg-opacity-50">
//         <Header title="GPS" />
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-6">
//             <header className="mb-0">
//               <h1 className="text-2xl font-bold text-white">GPS Data</h1>
//               <p className="text-gray-400">Real-time GPS location of the robot</p>
//             </header>
//             <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
//               <MapContainer center={position || [0, 0]} zoom={13} className="h-96 w-full rounded-lg">
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {position && (
//                   <Marker position={position} icon={customIcon}>
//                     <Popup>
//                       <strong>Location:</strong> {locationName} <br />
//                       <strong>Latitude:</strong> {position[0]} <br />
//                       <strong>Longitude:</strong> {position[1]}
//                     </Popup>
//                   </Marker>
//                 )}
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPSData;


// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Header from './Header';

// // Define a custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const GPSData = () => {
//   const [position, setPosition] = useState(() => {
//     const savedPosition = localStorage.getItem('lastPosition');
//     return savedPosition ? JSON.parse(savedPosition) : [0, 0];
//   });
//   const [locationName, setLocationName] = useState('Fetching location...');
//   const intervalIdRef = useRef(null);

//   const fetchGPSData = async () => {
//     try {
//       const response = await fetch('http://172.20.10.3/gps');
//       const gpsData = await response.json();

//       if (gpsData.latitude && gpsData.longitude) {
//         const lat = parseFloat(gpsData.latitude);
//         const lng = parseFloat(gpsData.longitude);
//         const newPosition = [lat, lng];

//         setPosition(newPosition);
//         localStorage.setItem('lastPosition', JSON.stringify(newPosition)); // Save to localStorage

//         // Reverse geocoding to get location name
//         const locationResponse = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
//         );
//         const locationData = await locationResponse.json();

//         setLocationName(locationData.display_name || 'Unknown Location');
//       } else {
//         console.error('Invalid GPS data:', gpsData);
//         setLocationName('Invalid GPS data');
//       }
//     } catch (error) {
//       console.error('Error fetching GPS data:', error);
//       setLocationName('Error fetching data');
//     }
//   };

//   useEffect(() => {
//     fetchGPSData();
//     intervalIdRef.current = setInterval(fetchGPSData, 1000);

//     return () => {
//       clearInterval(intervalIdRef.current); // Clean up interval on unmount
//     };
//   }, []);

//   return (
//     <div
//       className="relative flex flex-col min-h-screen bg-[#121a21] dark overflow-x-hidden"
//       style={{
//         fontFamily: 'Inter, "Noto Sans", sans-serif',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Header title="GPS" />
//       <div className="flex-1 flex flex-col p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
//         <header className="mb-4">
//           <h1 className="text-2xl font-bold text-white">GPS Data</h1>
//           <p className="text-gray-400">Real-time GPS location of the robot</p>
//         </header>
//         <div className="flex-1">
//           <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {position && (
//               <Marker position={position} icon={customIcon}>
//                 <Popup>
//                   <strong>Location:</strong> {locationName} <br />
//                   <strong>Latitude:</strong> {position[0]} <br />
//                   <strong>Longitude:</strong> {position[1]}
//                 </Popup>
//               </Marker>
//             )}
//           </MapContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GPSData;



import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Header from './Header';

// Define a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const GPSData = () => {
  const [position, setPosition] = useState(() => {
    // Try to load the last position from localStorage
    const savedPosition = localStorage.getItem('lastPosition');
    return savedPosition ? JSON.parse(savedPosition) : null;
  });
  const [locationName, setLocationName] = useState('');
  const intervalIdRef = useRef(null);

  const fetchGPSData = async () => {
    try {
      const response = await fetch('http://172.20.10.3/gps');
      const gpsData = await response.json();

      if (gpsData.latitude && gpsData.longitude) {
        const lat = parseFloat(gpsData.latitude);
        const lng = parseFloat(gpsData.longitude);
        const newPosition = [lat, lng];

        setPosition(newPosition);
        localStorage.setItem('lastPosition', JSON.stringify(newPosition)); // Save to localStorage

        // Reverse geocoding to get location name
        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
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

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchGPSData(); // Fetch data immediately when the tab becomes active
        intervalIdRef.current = setInterval(fetchGPSData, 1000); // Resume interval fetching
      } else {
        clearInterval(intervalIdRef.current); // Stop fetching when the tab is not visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial fetch and interval setup
    fetchGPSData();
    intervalIdRef.current = setInterval(fetchGPSData, 1000);

    return () => {
      clearInterval(intervalIdRef.current); // Clean up interval on unmount
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        backgroundImage: 'url("https://images.unsplash.com/photo-1602079080437-55c3679e1ed3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="layout-container flex h-full grow flex-col bg-black bg-opacity-50">
        <Header title="GPS" />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-6">
            <header className="mb-0">
              <h1 className="text-2xl font-bold text-white">GPS Data</h1>
              <p className="text-gray-400">Real-time GPS location of the robot</p>
            </header>
            <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-xl">
              <MapContainer center={position || [0, 0]} zoom={13} className="h-96 w-full rounded-lg">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {position && (
                  <Marker position={position} icon={customIcon}>
                    <Popup>
                      <strong>Location:</strong> {locationName} <br />
                      <strong>Latitude:</strong> {position[0]} <br />
                      <strong>Longitude:</strong> {position[1]}
                    </Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPSData;
