import styled from 'styled-components'
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'


export const CFigure = styled(Figure)
`  
width:100%;
padding:  0px 10% 0px 14%; 
word-wrap:  break-word

`

export const CFigureImage = styled(Figure.Image)
`  
width:350px;
height: 250px;
padding-right: 1%;
padding-bottom: 1%;
display:inline;
position:absolute;



`
export const CDivSearch = styled.div `  
background-color:	#0f171e;

`

export const CHr = styled.hr `  
margin-left: 3%;
margin-bottom: 1%;
width:82%;
border-top: 1px solid #7e97a4;
position:relative;
`
export const CP = styled.p `  
color:#8197a4;
font-size: larger;
font-weight: 500;
position:relative;
display: inline;
margin-left:3%;
`
export const CButton = styled.button `  
border-radius: 3px;
display: inline-block;
padding: 8px 16px;
background-color: #425265;
min-width: 100px;
text-align: center;
color:#ffffff;
border:0;
margin-left:63%;
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
width:300px; 
margin-top:150px;
height: 250px;
padding-right: 0.5%;
z-index:2;
background-color:#1b2530;
color:#ffffff;
flexDirection:row;

`


export const CPIcons = styled.p ` 

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
export const CIcons = styled.div ` 
width:100%; 
display: flex;
padding: 5%;
justify-content: space-between;

`
export const CImg = styled.img ` 
width:15%; 
cursor: pointer;
`
