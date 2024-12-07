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
  const [detected, setDetected] = useState(null);

  // Read data from Firebase (based on the data you provided)
  useEffect(() => {
    const dataRef = ref(database); // Referencing the root of your Firebase DB

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
        setDetected(data.ultrasonic?.detected);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <h2>Manual Reset: {manualReset ? "Activated" : "Not Activated"}</h2>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">MQ2</div>
          <div className="stat-value">{sensors.MQ2}</div>
          <div className="stat-desc">Smoke and Gas</div>
        </div>

        <div className="stat">
          <div className="stat-title">MQ3</div>
          <div className="stat-value">{sensors.MQ3}</div>
          <div className="stat-desc">↗︎Alcohol</div>
        </div>

        <div className="stat">
          <div className="stat-title">MQ6</div>
          <div className="stat-value">{sensors.MQ6}</div>
          <div className="stat-desc">↘︎ Smoke, LPG</div>
        </div>
        <div className="stat">
          <div className="stat-title">DETECTED</div>
          <div className="stat-value">{detected}</div>
          <div className="stat-desc">↘︎Within 10CM</div>
        </div>
      </div>
    </div>
  );
};

export default Showdata;
