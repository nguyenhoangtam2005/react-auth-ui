import React from 'react';
import './Input.scss';

function Input({ label, error, ...props }) {
  return (
    <label className="input-field">
      {label && <span>{label}</span>}
      <input {...props} />
      {error && <p className="input-error">{error}</p>}
    </label>
  );
}

export default Input;
