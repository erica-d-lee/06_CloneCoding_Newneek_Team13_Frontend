import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import {  Banner, Category, Economy, Footer, Header, Body } from "../components/";

const CategoryNews = (props) => {
    return (
    <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>

    </React.Fragment>
    );
};

CategoryNews.defaultProps = {
    
};


export default CategoryNews;
