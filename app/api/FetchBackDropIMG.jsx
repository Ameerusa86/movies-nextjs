import React from 'react'

const FetchBackDropIMG = async(movieId) => {

    const API_KEY = process.env.API_KEY
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&page=1`)

  return response.data.backdrops.map((backdrop) => ({
    src: `https://image.tmdb.org/t/p/original/${backdrop.file_path}`,
    alt: backdrop.file_path,
  }));
}

export default FetchBackDropIMG;