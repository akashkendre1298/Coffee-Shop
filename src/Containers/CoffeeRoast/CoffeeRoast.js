import React from "react";
import "./CoffeeRoast.css";
import coffeeroast from "../../Assets/jake-buonemani-hKOBRd4Vhpw-unsplash.jpg";
import Button from "../../Components/Buttons/Button";
import WidthSpecific from "./../../Components/Width75em/WidthSpecific";

const CoffeeRoast = () => {
  return (
    <>
      <WidthSpecific>
        <section className="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://images.unsplash.com/photo-1600351425870-488198e68c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
                alt=""
                className="h-11 mb-5 "
              />
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Choose for your <br /> perfect coffee roast
              </h1>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <br />
              <div>
                <Button />
              </div>
            </div>
          </div>
        </section>
      </WidthSpecific>
    </>
  );
};

export default CoffeeRoast;
