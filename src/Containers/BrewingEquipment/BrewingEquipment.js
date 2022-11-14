import React from "react";
import "./BrewingEquipment.css";
// import brewingequipment1 from "../../Assets/coffee-brewing-equipment-11.jpg";
import brewingequipment1 from "../../Assets/coffee-brewing-equipment-1-removebg-preview.png";
import brewingequipment2 from "../../Assets/coffee-brewing-equipment-2-removebg-preview.png";
import brewingequipment3 from "../../Assets/coffee-brewing-equipment-3-removebg-preview.png";
import brewingequipment4 from "../../Assets/coffee-brewing-equipment-4-removebg-preview.png";
import WidthSpecific from "../../Components/Width75em/WidthSpecific";
const BrewingEquipment = () => {
  return (
    <WidthSpecific>
      <div className="bg-zinc-100">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="text-4xl font-medium title-font mb-5 text-green-900">
              Brewing Equipment
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Even if your less into design and more into context strategy
            </p>
          </div>
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
                    style={{ height: "290px", width: " 300px" }}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={brewingequipment1}
                  />
                </a>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Coffee Grinder
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Coffee{" "}
                </h2>
                <p className="mt-1 text-green-900 font-bold">$289.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="justify-center flex">
                <a
                  className="block relative h-48 rounded overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    style={{ height: "290px", width: " 300px" }}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={brewingequipment2}
                  />
                </a>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Faema E71E GTI
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Coffee
                </h2>
                <p className="mt-1 text-green-900 font-bold">$899.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                className="block relative h-48 rounded overflow-hidden"
                style={{ height: "300px" }}
              >
                <img
                  style={{ height: "290px", width: " 300px" }}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={brewingequipment3}
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Coffee Kettle
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Coffee
                </h2>
                <p className="mt-1 text-green-900 font-bold">$289.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                className="block relative h-48 rounded overflow-hidden"
                style={{ height: "300px" }}
              >
                <img
                  style={{ height: "290px", width: " 300px" }}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={brewingequipment4}
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Bottomless Portafilter
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Coffee
                </h2>
                <p className="mt-1 text-green-900 font-bold">$169.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidthSpecific>
  );
};

export default BrewingEquipment;
