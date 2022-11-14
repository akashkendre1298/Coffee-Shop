import React from "react";
import "./OurCoffee.css";
import coffeeimg1 from "../../Assets/ultra healthy 1.jpg";
import coffeeimg2 from "../../Assets/ultra healthy 2.jpg";
import coffeeimg3 from "../../Assets/ultra healthy 3.jpg";
import coffeeimg4 from "../../Assets/ultra healthy 4.jpg";
import WidthSpecific from "../../Components/Width75em/WidthSpecific";

const OurCoffee = () => {
  return (
    <>
      <WidthSpecific>
        {" "}
        <div className="bg-zinc-100">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-2">
              <h1 className="text-4xl font-medium title-font mb-5 text-green-900">
                Our Coffee
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                You begin with a text, you sculpt information
              </p>
            </div>
          </div>
          <div>
            <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <a className="mr-5 hover:text-gray-900">
                    <strong>
                      <u>ALL</u>
                    </strong>
                  </a>
                  <a className="mr-5 hover:text-gray-900">SINGLE ORIGIN</a>
                  <a className="mr-5 hover:text-gray-900">SPCIALITY</a>
                  <a className="mr-5 hover:text-gray-900">DECAF</a>
                </nav>
              </div>
            </header>
          </div>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="justify-center flex">
                  <a
                    className="block relative h-48 rounded overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    <img
                      style={{ height: "250px", width: " 200px" }}
                      alt="ecommerce"
                      className="object-cover object-cover-img object-center w-full h-full block"
                      src={coffeeimg1}
                    />
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Kenya Coffee
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Coffee{" "}
                  </h2>
                  <p className="mt-1 font-bold text-green-900">$178.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="justify-center flex">
                  <a
                    className="block relative h-48 rounded overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    <img
                      style={{ height: "250px", width: " 200px" }}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={coffeeimg2}
                    />
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Brazil Diamond
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Coffee
                  </h2>
                  <p className="mt-1 font-bold text-green-900">$239.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="justify-center flex">
                  <a
                    className="block relative h-48 rounded overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    <img
                      style={{ height: "250px", width: " 200px" }}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={coffeeimg3}
                    />
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Colombia Bucaramanga
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Coffee
                  </h2>
                  <p className="mt-1 font-bold text-green-900">$189.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="justify-center flex">
                  <a
                    className="block relative h-48 rounded overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    <img
                      style={{ height: "250px", width: " 200px" }}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={coffeeimg4}
                    />
                  </a>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Guatemala Huehuetenango
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Coffee
                  </h2>
                  <p className="mt-1 font-bold text-green-900">$199.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthSpecific>
    </>
  );
};

export default OurCoffee;
