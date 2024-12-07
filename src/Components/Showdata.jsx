import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import database from "../../firebase.config"; // Ensure this import path is correct

const Showdata = () => {
  const [manualReset, setManualReset] = useState(null);
  const [sensors, setSensors] = useState({
    MQ135: null,
    MQ2: null,
    MQ3: null,
    MQ6: null,
  });

  // Read data from Firebase (based on the data you provided)
  useEffect(() => {
    const dataRef = ref(database);  // Referencing the root of your Firebase DB

    // Listen for changes in the root data
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Accessing the keys provided: manual_reset and sensor data
        setManualReset(data.manual_reset); 
        setSensors({
          MQ135: data.sensors?.MQ135,
          MQ2: data.sensors?.MQ2,
          MQ3: data.sensors?.MQ3,
          MQ6: data.sensors?.MQ6,
        });
      }
    });
  }, []);

  return (
    <div>
      <h1>Sensor Data</h1>
      <div>
        <h2>Manual Reset: {manualReset ? "Activated" : "Not Activated"}</h2>
      </div>
      <div>
        <h2>Sensors</h2>
        <p>MQ135: {sensors.MQ135}</p>
        <p>MQ2: {sensors.MQ2}</p>
        <p>MQ3: {sensors.MQ3}</p>
        <p>MQ6: {sensors.MQ6}</p>
      </div>
    </div>
  );
};

export default Showdata;
