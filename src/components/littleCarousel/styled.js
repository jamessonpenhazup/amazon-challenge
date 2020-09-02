import styled from 'styled-components'
import Figure from 'react-bootstrap/Figure'
import setaEsquerda from '../../img/seta_esquerda1.png'
import setaDireita from '../../img/seta_direita1.png'
import Card from 'react-bootstrap/Card'

export const CFigure = styled(Figure)
`  
width:100%;

overflow: hidden;
padding:  0px 0px 0px 50px; 
display:inline-block;
white-space: nowrap;
word-wrap:  break-word
`

export const CFigureImage = styled(Figure.Image)
`  
width:290px;
height: 150px;
padding-right: 0.5%;
display:inline;
position:absolute;


`
export const CButtonLeft = styled.button `  
width:50px;
height: 150px;
 opacity: 0.5;
background-image:url(${setaEsquerda});
background-repeat: no-repeat;
margin-left: 87%;
position:absolute;
z-index:1;
color: #ffff;
cursor: pointer;
@media(max-width: 659px) {
    margin-left: 75%;
  }
  @media(min-width: 1200px) {
    margin-left: 92%;
  }

`
export const CButton = styled.button `  
width:50px;
height: 150px;
opacity: 0.5;
position:absolute;
color: #ffff;
z-index:1;
background-image:url(${setaDireita});
background-repeat: no-repeat;
display:flex;
`


export const CDiv = styled.div ` 
width:300px; 
height: 150px;
display:inline-flex;
position:relative;
overflow: hidden;
&:hover {
    height: 350px;
   }
   white-space: normal;

`


export const CInfo = styled(Card)
` 
width:290px; 
margin-top:150px;
height: 250px;
padding-right: 0.5%;
z-index:2;
background-color:#1b2530;
color:#ffffff;
flexDirection:row;

`


export const CP = styled.p ` 

font-size: 0.6em;
word-wrap: break-word;
white-space: wrap;
overflow: hidden;
height: 55px;
cursor: pointer;
`


export const CTitle = styled.p ` 

font-weight: bolder;
word-wrap: break-word;
white-space: wrap;


`

export const CImg = styled.img ` 
width:15%; 
cursor: pointer;
`
export const CIcons = styled.div ` 
width:100%; 
display: flex;
padding: 5%;
justify-content: space-between;
`
