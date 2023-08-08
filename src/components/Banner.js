import React from "react";

const Banner = (props) => {
  return (
    <div className="container-fluid" id="banner">
      {props.children}
    </div>
  );
};

export default Banner;
