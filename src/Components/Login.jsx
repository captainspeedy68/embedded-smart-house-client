import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  // Handle input change for username and password
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check to save the login state to localStorage
    // No need for credentials validation if you just want to redirect directly
    localStorage.setItem('isLoggedIn', 'true');  // Simulate successful login
    navigate('/home');  // Redirect to the home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-600 to-blue-200 flex justify-center items-center">
      <div className="card w-96 bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-600">Username</span>
            </label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="input input-bordered input-md w-full"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-600">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="input input-bordered input-md w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full py-2 text-white text-lg bg-blue-600 hover:bg-blue-700 rounded-md">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-700">
          Donot have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
