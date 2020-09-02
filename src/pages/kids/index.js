import React from 'react'
import Menu from '../../components/menu'
import BigCarousel from '../../components/carousel'
import { CDiv } from './styled'
import LittleCarousel from '../../components/littleCarousel'
import Footer from '../../components/footer'
import CPComponent from '../../components/paragraph'
function Kids() {

    return (
        <CDiv>
            <Menu></Menu>
            <BigCarousel id={"movie/326359"} />
            <CPComponent title="Assista a seguir" />
            <LittleCarousel id="movie/11544" object={LittleCarousel} />
            <CPComponent title="Séries Amazon Originals para crianças" />
            <LittleCarousel id="tv/1777" />
            <CPComponent title="Filmes e séries para crianças mais velhas" />
            <LittleCarousel id="movie/9738" />
            <CPComponent title="Animações" />
            <LittleCarousel id="movie/73456" />
            <CPComponent title="Melhores filmes" />
            <LittleCarousel id="movie/13002" />
            <Footer></Footer>
        </CDiv>
    );

};

export default Kids;