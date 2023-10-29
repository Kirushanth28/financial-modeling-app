import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Home = () => {

    const [formData, setFormData] = useState({
        name: 'AAPL',
    });

    const handleSubmit = (e, url) => {
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

        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md text-center p-8">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />

                {/* <SearchInput
          className="w-96"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        /> */}

                <div className="relative text-gray-600">
                    <div className="absolute top-0 left-0 mt-4 ml-4">
                        <BiSearch size={20} />
                    </div>
                    <input
                        type="text"
                        className="bg-white border rounded-full h-12 px-5 pl-12 text-sm focus:outline-none shadow-md w-full"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mt-4 flex">
                    <InertiaLink className="bg-blue-500 text-white px-4 py-2 rounded-md w-40 mr-6" href={`/company/profile/${symbol}`}>Company Profile</InertiaLink>
                    <InertiaLink className="bg-blue-500 text-white px-4 py-2 rounded-md w-40 ml-10" href={`/company/quote/${symbol}`}>Company Quote</InertiaLink>
                </div>
            </div>
        </div>


    );
};

export default Home;


{/* <div>
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

      
    </div> */}