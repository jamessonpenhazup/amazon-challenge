import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { CFigure, CFigureImage, CButton, CButtonLeft, CDiv, CInfo, CP, CTitle, CImg, CIcons } from './styled'
import play from '../../img/pla2.png'
import plus from '../../img/plus.png'

export default function LittleCarousel({ id, object }) {

  const link = "https://api.themoviedb.org/3/";
  const key = "/similar?api_key=d31dd7cc1d8493f039773083f193c8b1&page=1&language=pt-BR";
  const [littleMovies, setMovies] = useState([])

  async function loadImg() {
    await axios.get(link + id + key)
      .then(function (response) {
        setMovies(response.data.results)
        console.log(littleMovies)
      });
  };
  async function scrollLeft(object) {
    object.scrollLeft -= 600;
  }
  async function scrollRight(object) {
    object.scrollLeft += 200;
  }
  useEffect(() => {
    loadImg();

  }, []);
  console.log(littleMovies)
  return (
    <CFigure id={id}>
      <CButton onClick={() => scrollLeft(document.getElementById(id))} />
      <CButtonLeft onClick={() => scrollRight(document.getElementById(id))} />
      {littleMovies.map(movie => (
        movie.backdrop_path ?
          <CDiv>
            <CFigureImage
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            /> <CInfo> <CIcons><CImg src={play} /><CTitle> Reproduzir </CTitle><CImg src={plus} /></CIcons> <CTitle maxlength="10">{movie.original_title}</CTitle> <CP>{movie.overview}</CP> {movie.release_date}</CInfo></CDiv> : []
      ))}

    </CFigure>


  );

}