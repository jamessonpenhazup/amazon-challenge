import React from 'react'
import Menu from '../../components/menu'
import BigCarousel from '../../components/carousel'
import { CDiv } from './styled'
import LittleCarousel from '../../components/littleCarousel'
import Footer from '../../components/footer'
import CPComponent from '../../components/paragraph'

function Series() {

    return (
        <CDiv>
            <Menu></Menu>
            <BigCarousel id={"tv/500"} />
            <CPComponent title="Próximas séries para assistir" />
            <LittleCarousel id="tv/869" object={LittleCarousel} />
            <CPComponent title="Séries Amazon Originals e exclusivas" />
            <LittleCarousel id="tv/500" />
            <CPComponent title="Séries adicionadas recentemente" />
            <LittleCarousel id="tv/909" />
            <CPComponent title="Melhores séries" />
            <LittleCarousel id="tv/780" />
            <CPComponent title="Séries infantis e para a família" />
            <LittleCarousel id="tv/850" />
            <Footer></Footer>
        </CDiv>
    );

};

export default Series;