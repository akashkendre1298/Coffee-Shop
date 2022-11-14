import React from "react";
import "./NewFlavors.css";
import WidthSpecific from "./../../Components/Width75em/WidthSpecific";
const NewFlavors = () => {
  return (
    <>
      <WidthSpecific>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 mx-4">
                <div className="rounded-lg h-full overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                  />
                </div>
              </div>
              <div className="sm:w-1/3 mb-10 px-4  h-50">
                <h2 className="title-font text-3xl font-medium text-emerald-800 mt-6 mb-3">
                  Try New Flavors First
                </h2>
                <p className="leading-relaxed text-base">Come To the points </p>
                <br />

                <div className="rounded-lg h-74 mx-auto overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full "
                    src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </WidthSpecific>
    </>
  );
};

export default NewFlavors;
