import React from "react";
import starIcon from "../../assets/star.svg";

const Stars = ({ stars }) => {
  const renderedComponents = Array.from({ length: stars }, (value, index) => (
    <img src={starIcon} key={index} />
  ));
  return (
    <div className="flex items-center space-x-1">
      {renderedComponents}

      <span className="text-xs lg:text-sm">({stars} Star)</span>
    </div>
  );
};

export default Stars;
