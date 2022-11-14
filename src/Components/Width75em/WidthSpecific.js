import React from "react";
import "./WidthSpecific.css";
const WidthSpecific = (props) => {
  return (
    <div className="flex-center-container-for-75-em">
      <div className="width-75-em">{props.children}</div>
    </div>
  );
};

export default WidthSpecific;
