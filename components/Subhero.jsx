import { ChevronRight } from "lucide-react";
import { LineChart, PiggyBank, ShieldCheck} from "lucide-react";
import React from "react";

const Subhero = () => {
  return (
    <div className="py-10">
      <div className="w-[80%] mx-auto">

        <h1 className="font-bold text-xl mb-1 text-black">What we Provide</h1>
        <p className="text-black mb-3">
        We provide comprehensive financial solutions tailored to your needs, empowering you to achieve your unique financial goals with confidence.
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
            Ensure financial security for your loved ones with coverage tailored to your family&apos;s needs and future goals.
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
            Achieve your financial goals through SIPs and benefit from the potential for long-term income generation.
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
            Safeguard your assets against a wide range of risks, including property damage, liability claims and unforeseen events.
            </p>
            <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
              <ChevronRight />
            </div>
          </a>
        </div>


        <h1 className="font-bold text-xl mb-1 mt-10 text-black">What we do</h1>
        <p className="text-black mb-3">
        We specialize in providing expert financial services designed to empower individuals and businesses to navigate the complexities of finance with clarity and confidence.
        </p>

        <div className="mb-10 grid md:grid-cols-3 gap-3">
          <a
            href="/book-now"
            className="block text-start relative max-w-sm p-6 hover:shadow-lg hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Wealth Protection
            </h5>
            <ShieldCheck className="text-black"/>
            </div>
            <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Safeguard your hard-earned assets with comprehensive insurance solutions tailored to your unique needs.
            </p>
            {/* <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
              <ShieldCheck />
            </div> */}
          </a>

          <a
            href="/book-now"
            className="block text-start relative hover:shadow-lg max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Wealth Management
            </h5>
            <LineChart className="text-black"/>
            </div>
            <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
            Optimize your investment portfolio with personalized strategies that align with your financial goals and risk tolerance.
            </p>
            {/* <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
              <LineChart />
            </div> */}
          </a>

          <a
            href="/book-now"
            className="block text-start hover:shadow-lg relative max-w-sm p-6 hover:translate-x-2 hover:-translate-y-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Wealth Creation
            </h5>
            <PiggyBank className="text-black"/>
            </div>
            <p className="font-normal mb-4 text-gray-700 dark:text-gray-400">
              Unlock opportunities for wealth accumulation through strategic investment and innovative financial solutions.
            </p>
            {/* <div className="absolute right-0 bottom-0 m-5 text-end justify-end text-black">
              <PiggyBank />
            </div> */}
          </a>
        </div>



        <div className="w-full p-4 my-5 text-center bg-white rounded-lg sm:p-8 dark:bg-gray-800">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Need all Investments in One Place
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Stay up to date and move plan forward with Alphamatics on
            Android. Download the app today.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="https://play.google.com/store/apps/details?id=com.alphamaticsap.app"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subhero;
