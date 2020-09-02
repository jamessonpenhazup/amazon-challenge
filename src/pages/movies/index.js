import React from 'react'
import Menu from '../../components/menu'
import BigCarousel from '../../components/carousel'
import { CDiv } from './styled'
import LittleCarousel from '../../components/littleCarousel'
import Footer from '../../components/footer'
import CPComponent from '../../components/paragraph'

function Movies() {

    return (
        <CDiv>
            <Menu></Menu>
            <BigCarousel id={"movie/510"} />
            <CPComponent title="Próximos filmes para assistir" />
            <LittleCarousel id="movie/574" object={LittleCarousel} />
            <CPComponent title="Filmes em destaque" />
            <LittleCarousel id="movie/800" />
            <CPComponent title="Filmes que achamos que você vai curtir" />
            <LittleCarousel id="movie/241" />
            <CPComponent title="Filmes para toda a família" />
            <LittleCarousel id="movie/479" />
            <CPComponent title="Filmes adicionados recentemente" />
            <LittleCarousel id="movie/180" />
            <Footer></Footer>
        </CDiv>
    );

};

export default Movies;