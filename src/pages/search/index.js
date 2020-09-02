import React from 'react'
import Menu from '../../components/menu'
import { CDiv } from './styled'
import { useParams } from 'react-router-dom'
import SearchComponent from '../../components/search'
import Footer from '../../components/footer'
function Search() {
    const params = useParams();

    return (
        <CDiv>
            <Menu />
            <SearchComponent id={params} />
            <Footer />
        </CDiv>
    );

};

export default Search;