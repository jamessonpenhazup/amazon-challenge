import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo2 from '../../img/logo2.PNG'
import { CNavbar, CNav, CNavLink, CNavLinkCopy } from './styled'

export default function Footer() {

    return (

        <CNavbar variant="dark">
            <img src={logo2} href="/home" />
            <CNav className="mr-auto">
                <CNavLink >Termos e aviso de privacidade</CNavLink>
                <CNavLink >Enviar feedback</CNavLink>
                <CNavLink >Ajuda</CNavLink>
                <CNavLinkCopy >1996-2020, Amazon.com, Inc. ou suas afiliadas</CNavLinkCopy>
            </CNav>
        </CNavbar>

    );
}