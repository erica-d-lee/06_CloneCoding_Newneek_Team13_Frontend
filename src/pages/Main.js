import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import {  Banner, Category, Economy, Footer, Header, CardList, Body, IntroHead } from "../components/";
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as newsActions} from '../redux/modules/news';

const Main = (props) => {
    const dispatch = useDispatch();
    const news_list = useSelector(state => state.news.list);
    useEffect(() => {
        dispatch(newsActions.setNewsDB());
    }, []);

    return (
    <React.Fragment>
        <Header/>
        <IntroHead/>
        <Body {...news_list} />
        <Footer/>
    </React.Fragment>
    );
};

Main.defaultProps = {
    
};


export default Main ;