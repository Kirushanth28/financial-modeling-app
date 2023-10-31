import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import CompanyLogo from "../../../public/images/company_logo.png";

const Register = ({errors}) => {
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-24 w-auto"
          src={CompanyLogo}
          alt="Company Logo"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                required
                placeholder="Enter Username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              />
              {errors.name && <span className="text-red-600">{errors.name}</span>}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                autoComplete="email"
                required
                placeholder="Enter Email Address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-red-600">{errors.email}</span>}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
                required
                placeholder="Enter Password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              />
              {errors.password && <span className="text-red-600">{errors.password}</span>}
            </div>
          </div>
          <div>
            <label
              htmlFor="repeatPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                name="password_confirmation"
                type="password"
                value={formData.password_confirmation}
                onChange={handleInputChange}
                autoComplete="current-password"
                required
                placeholder="Enter Password Again"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
              />
              {errors.password_confirmation && <span className="text-red-600">{errors.password_confirmation}</span>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <InertiaLink
            href="/"
            className="font-semibold leading-6 text-primary"
          >
            Login
          </InertiaLink>
        </p>
      </div>
    </div>
  );
};

export default Register;