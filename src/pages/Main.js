import React, { useEffect } from "react";
import { Footer, Header, Body, IntroHead } from "../components/";
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators as newsActions} from '../redux/modules/news';
import BottomBar from "../components/BottomBar";

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
        <BottomBar/>
    </React.Fragment>
    );
};

Main.defaultProps = {
    
};


export default Main ;