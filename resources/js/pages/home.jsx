import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Home = () => {

  const [formData, setFormData] = useState({
    name: 'AAPL',
  });

  const handleSubmit = (e,url) => {
    e.preventDefault();
    Inertia.visit(`/${url}/${formData.name}`);
    // Inertia.get(`/${url}/${formData.name}`, {
    //     onSuccess: () => {
    //       // Redirect to the desired page after successful login
    //     },
    //     onError:() => {
    //     }
    // });
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
      <h1>Home</h1>
      <form>
        <label>Company name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <p></p>
        <button type="button" onClick={e=>handleSubmit(e,'company-profile')}>Get Profile</button> <button type='button' onClick={e=>handleSubmit(e,'company-quote')}>Get Quote</button>
      </form>
    </div>
  );
};

export default Home;