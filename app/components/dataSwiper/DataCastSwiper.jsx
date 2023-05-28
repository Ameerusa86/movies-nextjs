"use client";

import React, { useState } from "react";
import CastSwiper from "../Swiper/CastSwiper";

const DataCastSwiper = ({ id, mediaType }) => {
  const [castData, setCastData] = useState([]);

  const handleDataChange = (data) => {
    setCastData(data);
  };

  return (
    <CastSwiper
      endpoint={`https://api.themoviedb.org/3/${mediaType}/${id}/credits`}
      // apiKey={process.env.APIKEY}
      apiKey="4a1414e6b1a6bd74ff7f45f4b0a63770"
      onDataChange={handleDataChange}
    />
  );
};

export default DataCastSwiper;
