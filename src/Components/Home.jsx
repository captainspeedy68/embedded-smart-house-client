import React, { useState } from 'react';

const Home = () => {
  const [sensorData, setSensorData] = useState({
    mq1: '',
    mq2: '',
    mq3: '',
    treeName: '',
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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-6">
      {/* Profile Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={profile.profilePicture}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
              <label className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
                <i className="fas fa-camera"></i>
              </label>
            </div>
            {/* Profile Name */}
            <div>
              <input
                type="text"
                name="userName"
                value={profile.userName}
                onChange={handleProfileChange}
                className="input input-bordered text-xl font-semibold w-48 text-center"
                placeholder="Enter your name"
              />
            </div>
          </div>
          {/* Profile Actions */}
          <div>
            <button className="btn btn-accent text-white px-6 py-2 text-lg">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <h2 className="text-3xl font-bold text-center text-white mb-8 animate__animated animate__fadeInUp">Sensor Dashboard</h2>

      {/* Real-Time and Manual Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Manual Data Section */}
        <div className="card w-full bg-base-100 shadow-lg transition-all transform hover:scale-105 duration-300">
          <div className="card-body">
            <h2 className="card-title text-center text-lg font-medium mb-5">Manual Sensor Data</h2>
            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-md">MQ1</span>
                </label>
                <input
                  type="number"
                  name="mq1"
                  value={sensorData.mq1}
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
                  name="mq2"
                  value={sensorData.mq2}
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
                  name="mq3"
                  value={sensorData.mq3}
                  onChange={handleSensorDataChange}
                  className="input input-bordered input-md"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-md">Tree Name</span>
                </label>
                <input
                  type="text"
                  name="treeName"
                  value={sensorData.treeName}
                  onChange={handleSensorDataChange}
                  className="input input-bordered input-md"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Real-Time Data Section */}
        <div className="card w-full bg-base-100 shadow-lg transition-all transform hover:scale-105 duration-300">
          <div className="card-body">
            <h2 className="card-title text-center text-lg font-medium mb-5">Real-Time Sensor Data</h2>
            {/* Real-time data will be displayed here */}
            <div className="text-center">
              <div className="mb-3">
                <h3 className="text-xl font-medium">MQ1: {sensorData.mq1}</h3>
                <h3 className="text-xl font-medium">MQ2: {sensorData.mq2}</h3>
                <h3 className="text-xl font-medium">MQ3: {sensorData.mq3}</h3>
                <h3 className="text-xl font-medium">Tree Name: {sensorData.treeName}</h3>
              </div>
              <div className="text-lg font-medium text-gray-600">
                <p>Real-time data is shown above.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;