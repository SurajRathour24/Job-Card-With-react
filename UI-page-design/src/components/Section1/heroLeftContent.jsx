import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroContent from "./HeroContent";
import ArrrowIcon from "./ArrrowIcon";

const heroLeftContent = () => {
  return (
    <div className="h-full w-1/3 text-left flex flex-col justify-between">
        < HeroContent />
        < ArrrowIcon />
    </div>
  );
};

export default heroLeftContent;
