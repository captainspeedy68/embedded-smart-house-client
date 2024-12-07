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

    // Simple authentication check (you can replace this with actual authentication logic)
    if (credentials.username === 'user' && credentials.password === 'password') {
      navigate('/home');  // Redirect to the home page on success
    } else {
      alert('Invalid credentials!');  // Show error if credentials are incorrect
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex justify-center items-center">
      <div className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Username</span>
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
              <span className="label-text">Password</span>
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
          <button type="submit" className="btn btn-primary w-full py-2 text-white text-lg">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Donot have an account? <a href="/register" className="text-blue-500">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
