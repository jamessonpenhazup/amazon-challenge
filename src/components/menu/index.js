import React from 'react'
import { Navbar } from 'react-bootstrap'
import { CNavbar, CNav, CNavLink, CForm, CFormControl, CUser, CDropDown, CDropDownItem, CDropDownMenu, DropdownUser, CUserP, CLogo } from './styled'
import logo from '../../img/logo.png'
import user from '../../img/user.png'
import history from '../history';
import Dropdown from 'react-bootstrap/Dropdown'

async function handleKeyPress(event) {
  if (event.key === 'Enter') {
    history.push(`/Search/${event.target.value}`)
  }
}


export default function Menu() {

  return (

    <CNavbar variant="dark">
      <Navbar.Brand href="/home"> <CLogo src={logo} /></Navbar.Brand>
      <CNav className="mr-auto">
        <CNavLink to="/home">Início</CNavLink>
        <CNavLink to="/series">Séries</CNavLink>
        <CNavLink to="/movies">Filmes</CNavLink>
        <CNavLink to="/kids">Infantil</CNavLink>
        <Dropdown>
          <CDropDown id="dropdown-basic">
            Explorar
        </CDropDown>
          <CDropDownMenu>
            <CDropDownItem href="/home">Início</CDropDownItem>
            <CDropDownItem href="/series">Séries</CDropDownItem>
            <CDropDownItem href="/movies">Filmes</CDropDownItem>
            <CDropDownItem href="/kids">Infantil</CDropDownItem>
          </CDropDownMenu>
        </Dropdown>
      </CNav>
      <CForm inline>
        <CFormControl type="text" placeholder="Busca" className="mr-sm-2" onKeyPress={handleKeyPress} />
      </CForm>
      <Dropdown>
        <DropdownUser id="dropdown-basic">
          <CUser src={user} />
          <CUserP>
            User
          </CUserP>
        </DropdownUser>
        <CDropDownMenu>
          <CDropDownItem href="/">Sair</CDropDownItem>
        </CDropDownMenu>
      </Dropdown>
    </CNavbar>

  );


};