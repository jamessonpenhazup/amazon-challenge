import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

export const CCarousel = styled(Carousel)
`  
width: 100%;
position: relative;
overflow: hidden;
`

export const CCarouselItem = styled(Carousel.Item)
`  
width: 75%;
height: 440px;
margin-left: 12%;
position: center;
align-self: center;
@media(max-width: 659px) {
   
    height: 240px;
  }
`

export const CImg = styled.img `  
width: 100%;
height: 440px;
align-self: center;
`