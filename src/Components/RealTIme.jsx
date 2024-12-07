import React from 'react';

const RealTIme = () => {
    const [sensorData, setSensorData] = useState({
        MQ135: '',
        MQ2: '',
        MQ3: '',
        MQ6: '',
      });
    
      const [profile, setProfile] = useState({
        userName: 'John Doe',
        profilePicture: 'https://www.w3schools.com/howto/img_avatar.png',
      });
    
      const handleSensorDataChange = (e) => {
        setSensorData({
          ...sensorData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleProfileChange = (e) => {
        setProfile({
          ...profile,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfile({
              ...profile,
              profilePicture: reader.result,
            });
          };
          reader.readAsDataURL(file);
        }
      };
    return (
        <div className="card w-full bg-base-100 shadow-lg transition-all transform hover:scale-105 duration-300">
          <div className="card-body">
            <h2 className="card-title text-center text-lg font-medium mb-5">Manual Sensor Data</h2>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-md">MQ135</span>
                </label>
                <input
                  type="number"
                  name="MQ135"
                  value={sensorData.MQ135}
                  onChange={handleSensorDataChange}
                  className="input input-bordered input-md"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-md">MQ2</span>
                </label>
                <input
                  type="number"
                  name="MQ2"
                  value={sensorData.MQ2}
                  onChange={handleSensorDataChange}
                  className="input input-bordered input-md"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-md">MQ3</span>
                </label>
                <input
                  type="number"
                  name="MQ3"
                  value={sensorData.MQ3}
                  onChange={handleSensorDataChange}
                  className="input input-bordered input-md"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-md">MQ6</span>
                </label>
                <input
                  type="text"
                  name="MQ6"
                  value={sensorData.MQ6}
                  onChange={handleSensorDataChange}
                  className="input input-bordered input-md"
                />
              </div>
            </form>
          </div>
        </div>
    );
};

export default RealTIme;