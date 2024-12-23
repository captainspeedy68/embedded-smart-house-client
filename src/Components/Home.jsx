import React, { useState } from 'react';
import { ref, onValue, set } from "firebase/database";
import database from "../../firebase.config";
import Showdata from './Showdata';
import RealTIme from './RealTIme';

const Home = () => {
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



        {/* Manual Data Section */}
       
        

       {/* <RealTIme></RealTIme> */}
       <Showdata></Showdata> 
</div>
    
  
 
 
  );

  };

export default Home;