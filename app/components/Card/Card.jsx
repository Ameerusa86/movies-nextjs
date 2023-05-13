import React from "react";
import "./Card.css";

import Image from "next/image";
import Link from "next/link";

const Card = ({ Movies }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original/";

  const {
    id,
    title,
    vote_average,
    overview,
    release_date,
    poster_path,
    backdrop_path,
    poster,
  } = Movies;
  const imageUrl = IMG_URL + (poster_path || backdrop_path);

  return (
    <Link href={`/movie/${id}`} className="">
      <div class="container">
        <div class="wrapper">
          <div
            class="banner-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <h1> {title}</h1>
          <p>{release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
