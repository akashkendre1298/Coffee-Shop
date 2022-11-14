import React from "react";
import "./Banner.css";
import Button from "./../../Components/Buttons/Button";
import WidthSpecific from "../../Components/Width75em/WidthSpecific";

const Banner = () => {
  return (
    <WidthSpecific>
      <div className="flex container justify-center main-div">
        <div className="container px-5 h-200 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1611249021021-21220638532e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="-z-50 w-full "
          />
          <div className="text-onn-banner-img  ">
            <h3 className="text-6xl leading-14 text-emerald-500 text-on-img px-5">
              Start your day with <br /> a good cup of coffee
            </h3>
            <br />
            <p className="para-on-img px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Adipisci error accusantium est esse commodi accusamus vel <br />
              veritatis quidem vero eaque, saepe aut repellendus ex recusandae{" "}
              <br />
              ab! Libero ratione ad atque fugiat quia molestias. In, suscipit.
            </p>
            <br />
            <div className="btn-on-banner px-5 ">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </WidthSpecific>
  );
};

export default Banner;
