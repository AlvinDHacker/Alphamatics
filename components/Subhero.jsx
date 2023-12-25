import { ChevronRight } from "lucide-react";
import { Calendar } from "lucide-react";
import React from "react";

const Subhero = () => {

  return (
    <div className="py-10">
      <div className="w-[80%] mx-auto">
      <h1 className="font-bold text-xl mb-1 text-black">What we do</h1>
      <p className="text-black mb-3">
        We cater to the public to channel their income in{" "}
      </p>

      <div className="mb-10 grid md:grid-cols-3 gap-3">
        <a href="/book-now"
          className="block text-start relative max-w-sm p-6 hover:shadow-lg hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wealth Protection
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
            <Calendar />
          </div>
        </a>

        <a
        href="/book-now"
          className="block text-start relative hover:shadow-lg max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wealth Management
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
            <Calendar />
          </div>
        </a>

        <a href="/book-now"
          className="block text-start hover:shadow-lg relative max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wealth Creation
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
            <Calendar />
          </div>
        </a>
      </div>

      <h1 className="font-bold text-xl mb-1 text-black">What we Provide</h1>
      <p className="text-black mb-3">
        We cater to the public to channel their income in{" "}
      </p>

      <div className="grid md:grid-cols-3 gap-3">
        <a
          href="/life-insurance"
          className="block hover:shadow-lg relative max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Life Insurance
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
            <ChevronRight />
          </div>
        </a>

        <a
          href="/mutual-funds"
          className="block hover:shadow-lg relative max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mutual Funds
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
            <ChevronRight />
          </div>
        </a>

        <a
          href="/general-insurance"
          className="block hover:shadow-lg relative max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            General Insurance
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
            <ChevronRight />
          </div>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Subhero;
