import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Calendar } from "lucide-react";
import React from "react";

const MF = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-[80%] mx-auto text-black py-10">
        <h1 className="text-lg mb-3">Mutual Funds</h1>
        <p>
        Mutual funds pool money from multiple investors to invest in a diversified portfolio of securities, offering a convenient and accessible way to invest in various asset classes.
        </p>

        <div className="py-10 pb-6">
          <h1 className="text-lg mb-3">Benifits of Mutual Funds</h1>
          <div className=" grid md:grid-cols-3 gap-3 ">
            <div className="block text-start relative max-w-sm p-6 hover:shadow-lg hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Diversification
              </h5>
              <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
              Invest in a wide range of securities across different industries, sectors, and regions to spread risk and enhance portfolio stability.
              </p>
            </div>

            <div className="block text-start hover:shadow-lg relative max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Professional Management
              </h5>
              <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
              Access expert investments from professional fund managers who research, analyze and monitor on your behalf.
              </p>
            </div>

            <div className="block text-start relative hover:shadow-lg max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Liquidity
              </h5>
              <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
              Enjoy the flexibility to buy and sell mutual fund shares at the current net asset value (NAV), providing liquidity when needed.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:gap-3">
        <a href="tel:9820257477" className="border border-gray-200 shadow-md rounded-full m-1 p-3 md:px-5 flex flex-row gap-3">
        <Phone size={23}/>
        <p className="md:block hidden"> 
        Call to Know More
        </p>
        </a>

        <a href="mailto:alphamatics4me@gmail.com" className="border shadow-md border-gray-200 rounded-full m-1 p-3 ">
        <Mail/>
        </a>

        <a href="book-now" className="border border-gray-200 shadow-md rounded-full m-1 p-3 px-5 flex flex-row gap-3">
        <Calendar/>
        <p className="md:block hidden">
        Book an Appointment 
        </p>
        <p className="md:hidden block">
            Book Now
        </p>
        </a>
        </div>


      </div>
    </div>
  );
};

export default MF;
