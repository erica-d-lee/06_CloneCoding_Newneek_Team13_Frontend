import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Footer, Header, DetailContent } from "../components/";
import { actionCreators as newsActions } from '../redux/modules/news';

const DetailNews = (props) => {
    // const dispatch = useDispatch();
    // const postId = window.location.pathname.split('/detailnews/')[1];
    // const news_list = useSelector((state) => state.news.list);
    // const news = news_list.find((news_item) => news_item.postId == postId)
    // console.log(news)
    // ;
    
    // useEffect(() => {
    //     if (news) {
    //         return;
    //     }
    //     dispatch(newsActions.setOneNewsDB(postId));
    // },[]);

    return (
    <React.Fragment>
        <Header />
        <DetailContent/>
        <Footer />
    </React.Fragment>
    );
};

DetailNews.defaultProps = {
    
};


export default DetailNews;
