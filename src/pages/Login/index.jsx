import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const backgroundImg = '/static/Background_Login.png';
const DEMO_EMAIL = 'Hoangtam@gmail.com';
const DEMO_PASSWORD = 'Tam2005@';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: DEMO_EMAIL, password: DEMO_PASSWORD });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const validation = {};
    if (!formData.email) validation.email = 'Email không được để trống';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validation.email = 'Email không hợp lệ';
    if (!formData.password) validation.password = 'Mật khẩu không được để trống';
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
    setLoading(true);

    if (formData.email === DEMO_EMAIL && formData.password === DEMO_PASSWORD) {
      const mockUser = { email: formData.email, name: 'Call Center User' };
      const mockToken = 'demo-token';

      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      navigate('/Dashboard');
    } else {
      setErrors({ form: 'Email hoặc mật khẩu chưa đúng' });
    }

    setLoading(false);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url('${backgroundImg}')` }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="Title_logo">Call Center</h1>
        <h2>Login</h2>

        <label className="login-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.email && <p className="login-error">{errors.email}</p>}
        </label>

        <label className="login-field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.password && <p className="login-error">{errors.password}</p>}
        </label>

        <button type="submit" className="login-submit" disabled={loading}>
          {loading ? 'Đang xử lý...' : 'Login'}
        </button>
        {errors.form && <p className="login-error">{errors.form}</p>}
      </form>
    </div>
  );
}

export default Login;
