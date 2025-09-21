import React from 'react';

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Create your Free Account</h2>
        <button className="w-full py-2 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Sign up with Google</button>
        <button className="w-full py-2 mb-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Sign up with Apple</button>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">or</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Your email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="name@company.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Country</label>
            <select
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            >
              <option>Choose a country</option>
              <option>United States</option>
              <option>India</option>
              <option>Canada</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="••••••••"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600 dark:text-gray-400">
                By signing up, you agree to Flowbite's Terms of Use and Privacy Policy.
              </span>
            </label>
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Create an account</button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign in here</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;