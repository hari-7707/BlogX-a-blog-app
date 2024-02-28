import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <footer className=" overflow-hidden py-10 bg-white border border-t-2 ">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap justify-center">
          <div className="w-full p-6 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center justify-center">
                <Logo className=" w-36 h-20" />
              </div>
              <div>
                <p className="text-sm text-gray-600 text-center">
                  &copy; Copyright 2023. All Rights Reserved by Hari Krishna.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-6 sm:w-1/4 lg:w-2/12 flex justify-center ">
            <div className="h-full ">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-orange-600">
                Company
              </h3>
              <ul>
                <li className="pb-2">
                  <Link
                    className=" text-xs md:text-base font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    className="text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    className="text-xs md:text-base font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-xs md:text-base font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 p-6 sm:w-1/4 lg:w-2/12 flex justify-center">
            <div className="h-full">
              <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-orange-600">
                Support
              </h3>
              <ul>
                <li className="pb-2">
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 p-6 sm:w-1/4 lg:w-3/12 flex justify-center">
            <div className="h-full">
              <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-orange-600">
                Legals
              </h3>
              <ul>
                <li className="pb-2">
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-xs md:text-base  font-medium text-gray-900 hover:text-orange-600"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
