import React from "react";

const loading = () => {
    setTimeout(() => {
        return <div className="loader"></div>;
    }, 2000)
  
};

export default loading;
