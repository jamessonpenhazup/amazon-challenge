import React from 'react'
import Menu from '../../components/menu'
import BigCarousel from '../../components/carousel'
import { CDiv } from './styled'
import CPComponent from '../../components/paragraph'
import LittleCarousel from '../../components/littleCarousel'
import Footer from '../../components/footer'

function Home() {

    return (
        <CDiv>
            <Menu></Menu>
            <BigCarousel id={"movie/508"} />
            <CPComponent title="Assista a seguir" />
            <LittleCarousel id="movie/3685" />
            <CPComponent title="Séries Amazon Originals e exclusivas" />
            <LittleCarousel id="tv/869" />
            <CPComponent title="Filmes que achamos que você vai curtir" />
            <LittleCarousel id="movie/24582" />
            <CPComponent title="Filmes adicionados recentemente" />
            <LittleCarousel id="movie/57463" />
            <CPComponent title="Filmes drama" />
            <LittleCarousel id="movie/25874" />
|           <Footer></Footer>
        </CDiv>
    );

};

export default Home;