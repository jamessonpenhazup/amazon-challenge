import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { CFigure, CFigureImage, CDivSearch, CHr, CButton, CDiv, CInfo, CP, CTitle, CImg, CIcons, CPIcons } from './styled'
import play from '../../img/pla2.png'
import plus from '../../img/plus.png'

export default function SearchComponent({ id }) {

  const link = "https://api.themoviedb.org/3/search/multi";
  const key = "?api_key=d31dd7cc1d8493f039773083f193c8b1&language=pt-BR&query=";
  const [searchMovies, setSearchMovies] = useState([])
  const [totalResults, setTotalResults] = useState()

  async function loadImg() {
    console.log(id)
    await axios.get(link + key + id.search)
      .then(function (response) {
        console.log(response)
        setSearchMovies(response.data.results)
        setTotalResults(response.data.total_results)
      });
  };

  useEffect(() => {
    loadImg();

  }, []);
  console.log(searchMovies)
  return (
    <CDivSearch>
      <CP>{totalResults + " resultado(s) para '" + id.search + "'."}</CP>
      <CButton>Refinar</CButton>
      <CHr />
      <CFigure>
        {searchMovies.map(movie => (
          movie.poster_path ?
            <CDiv>
              <CFigureImage

                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              /><CInfo> <CIcons><CImg src={play} /><CTitle> Reproduzir </CTitle><CImg src={plus} /></CIcons> <CTitle maxlength="10">{movie.original_title}</CTitle> <CPIcons>{movie.overview}</CPIcons> {movie.release_date}</CInfo></CDiv> : []

        ))}
      </CFigure>
    </CDivSearch>

  );

}