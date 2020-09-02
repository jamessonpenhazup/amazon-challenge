import styled from 'styled-components'
import {
    Navbar,
    Form,
    FormControl,
    Button,
    NavDropdown,
    Nav
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'


export const CNavbar = styled(Navbar)
`  
width: 100%;
min-height: 185px;
background-color: #0f171e;
text-align: center;
align-items: center;
justify-content: center;
padding: 0;
margin:0;
display: flex;
flex-direction: column;
`
export const CNav = styled(Nav)
`  
text-align: center;
align-items: center;
justify-content: center;
position:absolute;
margin-top:30px;
`

export const CNavLink = styled(Link)
`  
padding: 10px;     
color: #4490e3;
text-decoration: none;
text-align: center;
align-items: center;
justify-content: center;
&:hover {
    text-decoration: none;
   }
   @media(max-width: 360px) {
    padding: 1px; 
  }
`

export const CNavLinkCopy = styled(CNavLink)
`  
color:#7e97a4;
`
