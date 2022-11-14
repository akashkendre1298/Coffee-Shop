import React from "react";
import "./SignUp.css";
import imgsignup from "../../Assets/img-for-signup.jpg";
import Button from "../../Components/Buttons/Button";
import WidthSpecific from "../../Components/Width75em/WidthSpecific";
const SignUp = () => {
  return (
    <WidthSpecific>
      <div className="bg-zinc-100">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={imgsignup}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Do you like the theme?
                <br />
                Share with your friends!
              </h1>

              <div className="flex w-full py-5 md:justify-start justify-center items-end">
                <div className="relative  mr-4 lg:w-full xl:w-1/1 w-2/4">
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    placeholder="Your email address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  SignUp
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                Will be used in accordance with our{" "}
                <strong>Privacy Policy</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </WidthSpecific>
  );
};

export default SignUp;
