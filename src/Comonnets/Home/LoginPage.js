// src/components/Login.js
import React, { useState } from 'react';
import './LoginPage.css'; // Make sure to import the CSS file

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when the user modifies the input
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = 'Email is required.';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required.';
    }

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, you can proceed with the login logic
      // For this example, we'll just log the credentials
      console.log('Login credentials:', formData);
    } else {
      // Update the errors state to display validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-inputs">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-messages">
          {errors.email && <p className="error">{errors.email}</p>}
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
