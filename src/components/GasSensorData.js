// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import supabase from '../utils/supabaseClient';
// import Header from '../components/Header';

// const GasSensors = () => {
//   const [gasData, setGasData] = useState({
//     methane: 0.0,
//     propane: 0.0,
//     carbon_monoxide: 0.0,
//     lpg: 0.0
//   });

//   // Fetch data from Supabase
//   useEffect(() => {
//     const fetchGasData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('gas_pipeline')
//           .select('methane, propane, carbon_monoxide, lpg, created_at')
//           .order('created_at', { ascending: false })
//           .limit(1);

//         if (error) throw error;

//         if (data && data.length > 0) {
//           const latestData = data[0];
//           setGasData({
//             methane: latestData.methane || 0.0,
//             propane: latestData.propane || 0.0,
//             carbon_monoxide: latestData.carbon_monoxide || 0.0,
//             lpg: latestData.lpg || 0.0
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching gas data:', error.message);
//       }
//     };

//     fetchGasData();

//     // Set up real-time subscription for gas pipeline data
//     const channel = supabase
//       .channel('custom-gas-channel')
//       .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'gas_pipeline' }, (payload) => {
//         const newData = payload.new;
//         setGasData({
//           methane: newData.methane || 0.0,
//           propane: newData.propane || 0.0,
//           carbon_monoxide: newData.carbon_monoxide || 0.0,
//           lpg: newData.lpg || 0.0
//         });
//       })
//       .subscribe();

//     // Clean up the subscription on component unmount
//     return () => {
//       supabase.removeChannel(channel);
//     };
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
//         <Header title="Gas Sensor Data" />
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//             <motion.div
//               className="flex flex-wrap justify-between gap-3 p-4"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }} // Reduced duration
//             >
//               <div className="flex min-w-72 flex-col gap-3">
//                 <p className="text-white tracking-light text-[32px] font-bold leading-tight">Gas Concentrations</p>
//                 <p className="text-[#95b0c6] text-sm font-normal leading-normal">
//                   Methane, Propane, Carbon Monoxide, LPG
//                 </p>
//               </div>
//             </motion.div>
//             <div className="flex flex-wrap gap-4 p-4">
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#d0f0c0' }} // Light green for Methane
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">Methane</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.methane} ppm</p>
//               </motion.div>
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#ffebcd' }} // Light beige for Propane
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">Propane</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.propane} ppm</p>
//               </motion.div>
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#add8e6' }} // Light blue for Carbon Monoxide
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">Carbon Monoxide</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.carbon_monoxide} ppm</p>
//               </motion.div>
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#ffcccb' }} // Light red for LPG
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">LPG</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.lpg} ppm</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GasSensors;




// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import supabase from '../utils/supabaseClient';
// import Header from '../components/Header';

// const GasSensors = () => {
//   const [gasData, setGasData] = useState({
//     methane: 0.0,
//     propane: 0.0,
//     carbon_monoxide: 0.0,
//     lpg: 0.0,
//   });
//   const [historicalData, setHistoricalData] = useState([]);

//   // Fetch data from Supabase
//   useEffect(() => {
//     const fetchGasData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('gas_pipeline')
//           .select('methane, propane, carbon_monoxide, lpg, created_at')
//           .order('created_at', { ascending: false })
//           .limit(1);

//         if (error) throw error;

//         if (data && data.length > 0) {
//           const latestData = data[0];
//           setGasData({
//             methane: latestData.methane || 0.0,
//             propane: latestData.propane || 0.0,
//             carbon_monoxide: latestData.carbon_monoxide || 0.0,
//             lpg: latestData.lpg || 0.0,
//           });

//           // Update historical data
//           setHistoricalData((prevData) => [
//             ...prevData,
//             {
//               time: new Date(latestData.created_at).toLocaleTimeString(),
//               methane: latestData.methane,
//               propane: latestData.propane,
//               carbon_monoxide: latestData.carbon_monoxide,
//               lpg: latestData.lpg,
//             },
//           ]);
//         }
//       } catch (error) {
//         console.error('Error fetching gas data:', error.message);
//       }
//     };

//     fetchGasData();

//     // Set up real-time subscription for gas pipeline data
//     const channel = supabase
//       .channel('custom-gas-channel')
//       .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'gas_pipeline' }, (payload) => {
//         const newData = payload.new;
//         setGasData({
//           methane: newData.methane || 0.0,
//           propane: newData.propane || 0.0,
//           carbon_monoxide: newData.carbon_monoxide || 0.0,
//           lpg: newData.lpg || 0.0,
//         });

//         // Update historical data
//         setHistoricalData((prevData) => [
//           ...prevData,
//           {
//             time: new Date(newData.created_at).toLocaleTimeString(),
//             methane: newData.methane,
//             propane: newData.propane,
//             carbon_monoxide: newData.carbon_monoxide,
//             lpg: newData.lpg,
//           },
//         ]);
//       })
//       .subscribe();

//     // Clean up the subscription on component unmount
//     return () => {
//       supabase.removeChannel(channel);
//     };
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
//         <Header title="Gas Sensor Data" />
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//             <motion.div
//               className="flex flex-wrap justify-between gap-3 p-4"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }} // Reduced duration
//             >
//               <div className="flex min-w-72 flex-col gap-3">
//                 <p className="text-white tracking-light text-[32px] font-bold leading-tight">Gas Concentrations</p>
//                 <p className="text-[#95b0c6] text-sm font-normal leading-normal">
//                   Methane, Propane, Carbon Monoxide, LPG
//                 </p>
//               </div>
//             </motion.div>
//             <div className="flex flex-wrap gap-4 p-4">
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#d0f0c0' }} // Light green for Methane
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">Methane</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.methane} ppm</p>
//               </motion.div>
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#ffebcd' }} // Light beige for Propane
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">Propane</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.propane} ppm</p>
//               </motion.div>
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#add8e6' }} // Light blue for Carbon Monoxide
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">Carbon Monoxide</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.carbon_monoxide} ppm</p>
//               </motion.div>
//               <motion.div
//                 className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
//                 style={{ backgroundColor: '#ffcccb' }} // Light red for LPG
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }} // Reduced duration
//               >
//                 <p className="text-black text-base font-medium leading-normal">LPG</p>
//                 <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.lpg} ppm</p>
//               </motion.div>
//             </div>
//             <div className="flex flex-wrap gap-4 p-4">
//               <div className="w-full">
//                 <h2 className="text-xl font-bold text-white mb-4">Gas Levels Over Time</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={historicalData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="methane" stroke="#82ca9d" />
//                     <Line type="monotone" dataKey="propane" stroke="#ff7300" />
//                     <Line type="monotone" dataKey="carbon_monoxide" stroke="#8884d8" />
//                     <Line type="monotone" dataKey="lpg" stroke="#d0ed57" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GasSensors;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import supabase from '../utils/supabaseClient';
import Header from '../components/Header';
import NotificationModal from '../components/NotificationModal'; // Import the modal

const GasSensors = () => {
  const [gasData, setGasData] = useState({
    methane: 0.0,
    propane: 0.0,
    carbon_monoxide: 0.0,
    lpg: 0.0,
  });
  const [historicalData, setHistoricalData] = useState([]);
  const [alertData, setAlertData] = useState([]);
  const [alertTable, setAlertTable] = useState([]); // State to store table data
  const [alertActive, setAlertActive] = useState(false);
  const [gpsLocation, setGpsLocation] = useState({ latitude: 0, longitude: 0 });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchGasData = async () => {
      try {
        const { data, error } = await supabase
          .from('gas_pipeline')
          .select('methane, propane, carbon_monoxide, lpg, created_at, latitude, longitude')
          .order('created_at', { ascending: false })
          .limit(1);

        if (error) throw error;

        if (data && data.length > 0) {
          const latestData = data[0];
          setGasData({
            methane: latestData.methane || 0.0,
            propane: latestData.propane || 0.0,
            carbon_monoxide: latestData.carbon_monoxide || 0.0,
            lpg: latestData.lpg || 0.0,
          });
          setGpsLocation({
            latitude: latestData.latitude,
            longitude: latestData.longitude,
          });

          // Update historical data
          setHistoricalData((prevData) => [
            ...prevData,
            {
              time: new Date(latestData.created_at).toLocaleTimeString(),
              methane: latestData.methane,
              propane: latestData.propane,
              carbon_monoxide: latestData.carbon_monoxide,
              lpg: latestData.lpg,
            },
          ]);

          // Check for alert conditions
          if (latestData.methane > 80 || latestData.propane > 80 || latestData.carbon_monoxide > 80 || latestData.lpg > 80) {
            setAlertActive(true);
            const newAlertData = [
              { type: 'Methane', value: latestData.methane },
              { type: 'Propane', value: latestData.propane },
              { type: 'Carbon Monoxide', value: latestData.carbon_monoxide },
              { type: 'LPG', value: latestData.lpg },
            ].filter(gas => gas.value > 80);
            setAlertData(newAlertData);
            setShowModal(true); // Show the modal

            // Add to alert table
            setAlertTable(prevTable => [
              ...prevTable,
              ...newAlertData.map(gas => ({
                timestamp: new Date(latestData.created_at).toLocaleString(),
                gasType: gas.type,
                ppm: gas.value,
                coordinates: `Lat ${latestData.latitude}, Long ${latestData.longitude}`
              }))
            ]);
          } else {
            setAlertActive(false);
          }
        }
      } catch (error) {
        console.error('Error fetching gas data:', error.message);
      }
    };

    fetchGasData();

    const channel = supabase
      .channel('custom-gas-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'gas_pipeline' }, (payload) => {
        const newData = payload.new;
        setGasData({
          methane: newData.methane || 0.0,
          propane: newData.propane || 0.0,
          carbon_monoxide: newData.carbon_monoxide || 0.0,
          lpg: newData.lpg || 0.0,
        });
        setGpsLocation({
          latitude: newData.latitude,
          longitude: newData.longitude,
        });

        // Update historical data
        setHistoricalData((prevData) => [
          ...prevData,
          {
            time: new Date(newData.created_at).toLocaleTimeString(),
            methane: newData.methane,
            propane: newData.propane,
            carbon_monoxide: newData.carbon_monoxide,
            lpg: newData.lpg,
          },
        ]);

        // Check for alert conditions
        if (newData.methane > 80 || newData.propane > 80 || newData.carbon_monoxide > 80 || newData.lpg > 80) {
          setAlertActive(true);
          const newAlertData = [
            { type: 'Methane', value: newData.methane },
            { type: 'Propane', value: newData.propane },
            { type: 'Carbon Monoxide', value: newData.carbon_monoxide },
            { type: 'LPG', value: newData.lpg },
          ].filter(gas => gas.value > 80);
          setAlertData(newAlertData);
          setShowModal(true); // Show the modal

          // Add to alert table
          setAlertTable(prevTable => [
            ...prevTable,
            ...newAlertData.map(gas => ({
              timestamp: new Date(newData.created_at).toLocaleString(),
              gasType: gas.type,
              ppm: gas.value,
              coordinates: `Lat ${newData.latitude}, Long ${newData.longitude}`
            }))
          ]);
        } else {
          setAlertActive(false);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const closeModal = () => setShowModal(false);

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
        <Header title="Gas Sensor Data" />
        <div className="absolute top-1 right-4 flex items-center space-x-2">
          <div className={`w-4 h-4 rounded-full ${alertActive ? 'bg-red-500' : 'bg-green-500'} animate-pulse`} />
          <span className="text-white text-sm">ONLINE</span>
        </div>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <motion.div
              className="flex flex-wrap justify-between gap-3 p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} // Reduced duration
            >
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Gas Concentrations</p>
                <p className="text-[#95b0c6] text-sm font-normal leading-normal">
                  Methane, Propane, Carbon Monoxide, LPG
                </p>
              </div>
            </motion.div>
            <div className="flex flex-wrap gap-4 p-4">
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                style={{ backgroundColor: '#d0f0c0' }} // Light green for Methane
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }} // Reduced duration
              >
                <p className="text-black text-base font-medium leading-normal">Methane</p>
                <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.methane}</p>
                <p className="text-[#121a21] text-sm font-normal leading-normal">PPM</p>
              </motion.div>
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                style={{ backgroundColor: '#fad02e' }} // Yellow for Propane
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }} // Reduced duration
              >
                <p className="text-black text-base font-medium leading-normal">Propane</p>
                <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.propane}</p>
                <p className="text-[#121a21] text-sm font-normal leading-normal">PPM</p>
              </motion.div>
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                style={{ backgroundColor: '#ff6961' }} // Light red for Carbon Monoxide
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }} // Reduced duration
              >
                <p className="text-black text-base font-medium leading-normal">Carbon Monoxide</p>
                <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.carbon_monoxide}</p>
                <p className="text-[#121a21] text-sm font-normal leading-normal">PPM</p>
              </motion.div>
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                style={{ backgroundColor: '#77dd77' }} // Light green for LPG
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }} // Reduced duration
              >
                <p className="text-black text-base font-medium leading-normal">LPG</p>
                <p className="text-black tracking-light text-2xl font-bold leading-tight">{gasData.lpg}</p>
                <p className="text-[#121a21] text-sm font-normal leading-normal">PPM</p>
              </motion.div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tick={{ fill: '#ffffff' }} />
                <YAxis tick={{ fill: '#ffffff' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="methane" stroke="#d0f0c0" />
                <Line type="monotone" dataKey="propane" stroke="#fad02e" />
                <Line type="monotone" dataKey="carbon_monoxide" stroke="#ff6961" />
                <Line type="monotone" dataKey="lpg" stroke="#77dd77" />
              </LineChart>
            </ResponsiveContainer>
            {/* Alert Table */}
            {alertTable.length > 0 && (
              <div className="mt-5">
                <h3 className="text-white text-lg mb-3">Alert History</h3>
                <table className="table-auto w-full text-left text-white">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Timestamp</th>
                      <th className="px-4 py-2">Gas Type</th>
                      <th className="px-4 py-2">PPM</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {alertTable.map((alert, index) => (
                      <tr key={index} className="bg-gray-800">
                        <td className="border px-4 py-2">{alert.timestamp}</td>
                        <td className="border px-4 py-2">{alert.gasType}</td>
                        <td className="border px-4 py-2">{alert.ppm}</td>
                       
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <NotificationModal
        showModal={showModal}
        alertData={alertData}
        closeModal={closeModal}
        latitude={gpsLocation.latitude}
        longitude={gpsLocation.longitude}
      />
    </div>
  );
};

export default GasSensors;
