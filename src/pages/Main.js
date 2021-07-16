import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import {  Banner, Category, Economy, Footer, Header, CardList, Body } from "../components/";

const Main = () => {
    return (
    <React.Fragment>
        메인입니다 메인입니다.
        <Body></Body>
        <Footer/>
    </React.Fragment>
    );
};

Main.defaultProps = {
    
};


export default Main ;