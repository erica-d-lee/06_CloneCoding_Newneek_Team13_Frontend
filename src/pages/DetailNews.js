import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import {  Banner, Category, Economy, Footer, Header, Body, DetailContent } from "../components/";

const DetailNews = () => {
    return (
    <React.Fragment>
        <Header />
        <DetailContent />
        <Footer />
    </React.Fragment>
    );
};

DetailNews.defaultProps = {
    
};


export default DetailNews;
