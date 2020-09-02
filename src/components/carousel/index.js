import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImg } from './styled'
import axios from 'axios';

export default function BigCarousel({ id }) {

  const [index, setIndex] = useState(0);
  const link = "https://api.themoviedb.org/3/";
  const key = "/similar?api_key=d31dd7cc1d8493f039773083f193c8b1&page=1&language=pt-BR&include_adult=false";
  const [movies, setMovies] = useState([]);


  async function loadImg() {
    await axios.get(link + id + key)
      .then(function (response) {
        setMovies(response.data.results);
      });
  };
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    loadImg();
  }, []);
  return (
    <CCarousel activeIndex={index} onSelect={handleSelect}>
      {movies.map(movie => (
        <CCarouselItem>
          {movie.backdrop_path ?
            <CImg
              className="d-block w-100"
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt="First slide"
            /> : [<CImg className="d-block w-100" src={"https://image.tmdb.org/t/p/w500/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg"} alt="First slide" />]
          }
        </CCarouselItem>
      ))}
    </CCarousel>
  );
}