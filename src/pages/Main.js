import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import {  Banner, Category, Economy, Footer, Header, CardList, Body, IntroHead } from "../components/";
import BottomBar from "../components/BottomBar";

const Main = (props) => {
    return (
    <React.Fragment>
        <Header/>
        <IntroHead/>
        <Body/>
        <Footer/>
        
        <BottomBar/>
    </React.Fragment>
    );
};

Main.defaultProps = {
    
};


export default Main ;