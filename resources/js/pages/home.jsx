import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import CompanyLogo from "../../../public/images/company_logo.png";
import { BiSearch } from "react-icons/bi";

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

        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >

                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />

                </div>
                
                <div className="mx-auto max-w-2xl py-40 sm:pb-32 lg:py-32">
                <img
                    className="mx-auto h-24 w-auto mb-6"
                    src={CompanyLogo}
                    alt="Company Logo"
                />
                    <div className="search field">
                        <div className="relative text-gray-600">
                            <div className="absolute top-0 left-0 mt-4 ml-4">
                                <BiSearch size={20} />
                            </div>
                            <input
                                type="text"
                                className="bg-white border rounded-full h-12 px-5 pl-12 text-sm focus:outline-none shadow-md w-full"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                   
                    <div className="text-center">
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <InertiaLink
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get Company Profile <span aria-hidden="true">→</span>
                            </InertiaLink>
                            <InertiaLink
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get Company Quote <span aria-hidden="true">→</span>
                            </InertiaLink>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
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