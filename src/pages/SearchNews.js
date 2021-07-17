import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header, CardList} from "../components/";
import { Menu } from '../elements';

const SearchNews = (props) => {
    return (
    <React.Fragment>
        <Header />
        <div style={{backgroundColor: '#ebebeb', marginTop: '-1px'}}>

        </div>
        <Footer />
    </React.Fragment>
    );
};

SearchNews.defaultProps = {    
};


export default SearchNews;
