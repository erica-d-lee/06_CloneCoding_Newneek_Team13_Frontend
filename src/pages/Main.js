import React from "react";
import { Footer, Header, Body, IntroHead,BottomBar } from "../components/";

const Main = (props) => {

    return (
    <React.Fragment>
        <Header/>
        <IntroHead/>
        <Body />
        <Footer/>
        <BottomBar/>
    </React.Fragment>
    );
};

Main.defaultProps = {
    
};


export default Main ;