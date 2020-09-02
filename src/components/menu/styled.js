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
import Dropdown from 'react-bootstrap/Dropdown'
import SearchIcon from '@material-ui/icons/Search';


export const CNavbar = styled(Navbar)
`  
width: 100%;
min-width: 330px;
min-height: 70px;
background-color: #1a232e;
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px 25px;
z-index:2;
`
export const CNav = styled(Nav)
`  
flex: 1;
text-align: left;
margin-left: 25px;
`
export const CSearchIcon = styled(SearchIcon)
`  
color: #d7d9dd;

`



export const CNavLink = styled(Link)
`  
font-weight: 500;
list-style: none;
display: inline-block; 
padding: 5px;     
color: #d7d9dd;
text-decoration: none;
&:hover {
   color: #ffffff;
   text-decoration: none;
  }
  @media(max-width: 690px) {
    display: none;
  }
`
export const CDropDown = styled(Dropdown.Toggle)
`
font-weight: 500;
list-style: none;
display: inline-block; 
padding: 5px;    
background:none;
outline: none;
color: #d7d9dd;
text-decoration: none;
border:none;
&:hover {
   color: #ffffff;
   text-decoration: none;
   background:none;

  }
  @media(min-width: 689px) {
    display: none;
  }

`

export const DropdownUser = styled(Dropdown.Toggle)
`
background-color: #1a232e;
margin:0;
padding:2px;
border:none;
&:hover {
  background:none;
 }
`
export const CUserP = styled.a `
background-color: #1a232e;
color: #ffffff;
text-decoration: none;
@media(max-width: 670px) {
  display: none;
}
&:hover {
  color: #ffffff;
text-decoration: none;
 }
`

export const CDropDownItem = styled(Dropdown.Item)
`
font-weight: 500;
list-style: none;
display: inline-block; 
padding: 5px;    
background-color: #1a232e;
outline: none;
color: #d7d9dd;
text-decoration: none;
&:hover {
   color: #ffffff;
   text-decoration: none;
  }

`
export const CDropDownMenu = styled(Dropdown.Menu)
`

background-color: #1a232e;

`
export const CLogo = styled.img `

max-width:150px;
width:100%;

`



export const CFormControl = styled(FormControl)
`  
max-width: 250px;
width: 75%;
border:none;
outline: none;
border: 1px solid #c9d9dd;
color: #ffff;
border-radius: 3px;
background-color: #18202b;
position: relative;
font-size: 14px;
`
export const CForm = styled(Form)
`  
position: relative;
margin-right: 30px;
`
export const CUser = styled.img `  
width: 100%;
max-width: 40px;
height: 15%;
font-size: 20px;
color: #bbbdc0;
margin-right: 3%;
`
