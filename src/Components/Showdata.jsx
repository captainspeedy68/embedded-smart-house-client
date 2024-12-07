import React, { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import database from "../../firebase.config"; // Ensure this import path is correct

const Showdata = () => {
  const [manualReset, setManualReset] = useState(null); // State to track manual reset from Firebase
  const [sensors, setSensors] = useState({
    MQ135: null,
    MQ2: null,
    MQ3: null,
    MQ6: null,
  });
  const [detected, setDetected] = useState(null); // State to track the detection status

  // Read data from Firebase (based on the data you provided)
  useEffect(() => {
    const dataRef = ref(database); // Referencing the root of your Firebase DB

    // Listen for changes in the root data
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Accessing the keys provided: manual_reset and sensor data
        setManualReset(data.manual_reset); // Get manual reset state from Firebase
        setSensors({
          MQ135: data.sensors?.MQ135,
          MQ2: data.sensors?.MQ2,
          MQ3: data.sensors?.MQ3,
          MQ6: data.sensors?.MQ6,
        });
        setDetected(data.ultrasonic?.detected);
      }
    });
  }, []);

  // Handle manual reset toggle and update Firebase accordingly
  const handleManualResetToggle = () => {
    const newState = manualReset === 1 ? 0 : 1; // Toggle between 1 and 0 for manual reset
    setManualReset(newState); // Update local state to reflect the change

    // Update the manual_reset value in Firebase
    set(ref(database, "manual_reset"), newState); // Update Firebase

    // Automatically reset the manual reset after a certain timeout (e.g., 5 seconds)
    if (newState === 1) {
      setTimeout(() => {
        set(ref(database, "manual_reset"), 0); // Reset back to 0 after 5 seconds
        setManualReset(0); // Update local state to reflect the reset
      }, 5000); // 5 seconds timeout
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Manual Reset: {manualReset === 1 ? "Activated" : "Not Activated"}
        </h2>
      </div>

      {/* Checkbox for manual reset */}
      <div className="flex justify-center mb-6">
        <label className="flex items-center space-x-3 text-lg text-gray-700">
          <span>Toggle Manual Reset</span>
          <input
            type="checkbox"
            className="toggle toggle-info"
            checked={manualReset === 1} // Checked if manualReset is 1
            onChange={handleManualResetToggle} // Trigger the toggle function
          />
        </label>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow-lg">
        {/* MQ2 Sensor */}
        <div className="stat bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
          <div className="stat-title text-xl text-gray-600">MQ2</div>
          <div className="stat-value text-2xl font-bold text-indigo-600">{sensors.MQ2}</div>
          <div className="stat-desc text-gray-500">Smoke and Gas</div>
        </div>

        {/* MQ3 Sensor */}
        <div className="stat bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
          <div className="stat-title text-xl text-gray-600">MQ3</div>
          <div className="stat-value text-2xl font-bold text-indigo-600">{sensors.MQ3}</div>
          <div className="stat-desc text-gray-500">↗︎ Alcohol</div>
        </div>

        {/* MQ6 Sensor */}
        <div className="stat bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
          <div className="stat-title text-xl text-gray-600">MQ6</div>
          <div className="stat-value text-2xl font-bold text-indigo-600">{sensors.MQ6}</div>
          <div className="stat-desc text-gray-500">↘︎ Smoke, LPG</div>
        </div>

        {/* DETECTED Status */}
        <div className="stat bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
          <div className="stat-title text-xl text-gray-600">DETECTED</div>
          <div className="stat-value text-2xl font-bold text-indigo-600">{detected}</div>
          <div className="stat-desc text-gray-500">↘︎ Within 10CM</div>
        </div>
      </div>
    </div>
  );
};

export default Showdata;
