"use client"
// Import necessary React hooks (if needed) and styles
import { useState } from 'react';

const BasicSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <form className="mt-6 container editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select an option
      </label>
      <select
        id="countries"
        value={selectedCountry}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          Choose a country
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  );
};

export default BasicSelect;
