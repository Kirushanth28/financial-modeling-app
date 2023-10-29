import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    Inertia.post('/register', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input 
        name="name" 
        value={formData.name}
        onChange={handleInputChange}
        required/>
        <p></p>
        <label>Email</label>
        <input 
        name="email" 
        value={formData.email}
        onChange={handleInputChange}
        required/>
        <p></p>
        <label>Password</label>
        <input 
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange} 
        required/>
        <p></p>
        <label>Confirm Password</label>
        <input 
        name="password_confirmation" 
        type="password"
        value={formData.password_confirmation}
        onChange={handleInputChange}
        required/>
        <p></p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;