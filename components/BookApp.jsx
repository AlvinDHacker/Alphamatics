import React from "react";

const BookApp = () => {

  const submitform = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="bg-white h-screen">
      <div className="md:w-[70%] w-[90%] mx-auto py-10">
        <div className="grid md:grid-cols-2 gap-5">
          <img src="/phonecal.png" className="rounded-lg "/>
        <div>
          <h1 className="font-bold text-black text-xl py-1">
            Book An Appointment to Plan for your Financial Needs
          </h1>
          <form>
            <label
              for="task-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              name="name"
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="month"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact No.
            </label>
            <input
              name="phoneno"
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Why do you wish to book the Appointment ?
            </label>
            <input
              name="app_subject"
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Preffered Date of Appointment
            </label>
            <input
              name="date"
              type="date"
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Preffered Time of Appointment
            </label>
            <input
              name="time"
              type="time"
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="task-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Reffered by
            </label>
            <input
              name="ref_name"
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <button
              type="submit"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Book Now
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookApp;
