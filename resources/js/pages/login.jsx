import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Login = () => {
  const [formData, setFormData] = useState({
    email_or_name: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    Inertia.post('/login', formData, {
        onSuccess: () => {
          // Redirect to the desired page after successful login
          // Inertia.visit('/dashboard');
        },
        onError:() => {
        }
    });
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
      <h1 className="text-blue-600 hover:text-red-600">Login</h1>
      <form onSubmit={handleSubmit}>
        <label>User name or Email</label>
        <input
          name="email_or_name"
          value={formData.email_or_name}
          onChange={handleInputChange}
        />
        <p></p>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <p></p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;