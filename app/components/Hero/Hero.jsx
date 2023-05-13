import Movies from "@/app/api/Movies";
import React from "react";

const Hero = ({title}) => {
  return (
    <div className="w-full bg-gray-600">
      <h1>Main Page</h1>
      <Movies/>
      
    </div>
  );
};

export default Hero;
