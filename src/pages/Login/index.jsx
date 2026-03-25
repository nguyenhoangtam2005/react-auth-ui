import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const validation = {};
    if (!formData.username) validation.username = 'Username không được để trống';
    if (!formData.password) validation.password = 'Password không được để trống';
    return validation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setErrors({});
    console.log('Dữ liệu login:', formData);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        setErrors({ form: errorPayload.message || 'Login failed. Please try again.' });
        return;
      }

      const data = await response.json().catch(() => null);
      console.log('Login success:', data);
    } catch (err) {
      console.error('Login request error:', err);
      setErrors({ form: 'Network error. Please try again.' });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label className="login-field">
          <span>Username</span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="login-error">{errors.username}</p>}
        </label>

        <label className="login-field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="login-error">{errors.password}</p>}
        </label>

        <button type="submit" className="login-submit">Login</button>
        {errors.form && <p className="login-error">{errors.form}</p>}
      </form>
    </div>
  );
}

export default Login;
