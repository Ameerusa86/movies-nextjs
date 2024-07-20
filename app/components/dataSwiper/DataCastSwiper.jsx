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
      apiKey={process.env.NEXT_PUBLIC_APIKEY}
      onDataChange={handleDataChange}
    />
  );
};

export default DataCastSwiper;
