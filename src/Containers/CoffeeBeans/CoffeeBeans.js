import React from "react";
import Button from "../../Components/Buttons/Button";
import WidthSpecific from "../../Components/Width75em/WidthSpecific";
import "./CoffeeBeans.css";
const CoffeeBeans = () => {
  return (
    <>
      <WidthSpecific>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className=" mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
                <h1 className="text-emerald-900 text-3xl title-font font-medium mb-4">
                  Finely ground <br /> coffee beans
                </h1>

                <p className="leading-relaxed mb-4">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                  juiceramps cornhole. Fam locavore kickstarter distillery.
                  Mixtape chillwave tumeric sriracha taximy chia microdosing
                  tilde DIY
                </p>

                <br />
                <div>
                  <Button />
                </div>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64  object-center rounded"
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
              />
            </div>
          </div>
        </section>
      </WidthSpecific>
    </>
  );
};

export default CoffeeBeans;
