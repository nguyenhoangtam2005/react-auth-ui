import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Xử lý khi nhập input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate đơn giản
  const validate = () => {
    let newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username không được để trống";
    }

    if (!formData.password) {
      newErrors.password = "Password không được để trống";
    }

    return newErrors;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Dữ liệu login:", formData);

      // TODO: gọi API login ở đây
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>

        <div style={styles.field}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p style={styles.error}>{errors.username}</p>}
        </div>

        <div style={styles.field}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  form: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column"
  },
  error: {
    color: "red",
    fontSize: "12px"
  }
};

export default LoginForm;