import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import {Economy, ProgressBar} from './';
import {Menu, Button} from '../elements';
import { actionCreators as newsActions } from '../redux/modules/news';
import { useDispatch, useSelector } from 'react-redux';
import {Helmet} from 'react-helmet';
import {history} from "../redux/configureStore";
import Spinner from "./Spinner"
const DetailContent = () => {

  const dispatch = useDispatch();
  const postId = window.location.pathname.split('/detailnews/')[1];
  const news_list = useSelector((state) => state.news.list);
  const news = news_list.find((news_item) => news_item.postId == postId);

  useEffect(() => {
      if (news) {
          return;
      }
      dispatch(newsActions.setOneNewsDB(postId));
  },[]);
  
  if (!news){
    return (
      <Spinner/>
    )
  } 

  const category_obj = {'집콕': 'stayhome', '국내정치': 'politics', '세계': 'world', '테크': 'tech', '경제': 'economy', '노동/일': 'labor-work', '환경': 'environment', '여성': 'women', '코로나19': 'covid-19'};
  const category_key = news.category;
  const category_value = category_obj[category_key];

    // const content = "{news.htmlContent}"
    const {scrollTop} = document.documentElement;
    const content = news.htmlContent 


    return (
        <React.Fragment>
            <Helmet>
              <title>{news.title}</title>
            </Helmet>
            <div
                style={{
                    backgroundColor: '#ebebeb',
                    marginTop: '-1px',
                    margin: '0 auto',
                    overflow: 'hidden'
                }}>
                <Div
                    style={{
                        position: 'relative',
                        display: 'block',
                        letterSpacing: '-.0125rem'
                    }}>
                    <PostHead>
                        <RunningHead onClick={() => {history.push(`/category/${category_value}`)}}>{news.category}</RunningHead>
                        <Headline>{news.title}</Headline>
                        <HeadDate>{news.date}</HeadDate>
                        <ProgressBar/>
                    </PostHead>
                    <PostBody>
                        <div 
                            className='Room for Data'
                            style={{
                                padding: '0 0 3rem'
                            }}> 
                            <PostBodyHtml dangerouslySetInnerHTML={{__html: content}}>
                            </PostBodyHtml>
                            </div>
                    </PostBody>
                    <HashTag>
                      { news.hashtag.map(function(n,i){
                        return (<HashItem onClick={() => history.push(`/searchnews/:keyword=${n.split("#")[1]}`)}
                        key={i}>{n}</HashItem>
                        )})}  
                    </HashTag>
                </Div>
                <Economy/>
            </div>
        </React.Fragment>
    )
};

const Div = styled.div `
  @media (max-width: 1360px) {
    max-width: 1040px;
  }
`;

const PostBodyHtml =styled.div `
  & img {
    display: block;
    margin: 0 auto;
    width: auto;
    max-width: 100%;}
  & a {
    color:black;
  }  

`;

const PostHead = styled.header `
  margin: 0 0 4rem;
  padding: 4rem 5% 5.5rem;
  border-bottom: 1px solid #161616;
  overflow: hidden;
  text-align: center;
  position: relative;
  display: block;
`;

const RunningHead = styled.a `
  color: #fb7800 !important;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

const Headline = styled.h2 `
  padding: .5rem 0 2rem;
  font-size: 2.5rem;
  letter-spacing: -.075rem;
  color: #161616;
  font-weight: 700;
  line-height: 1.4;
  word-break: keep-all;
  margin: 0;
  display: block;
`;

const HeadDate = styled.time `
  font-size: 1.125rem;
`;

const PostBody = styled.div `
  max-width: 620px;
  margin: 0 auto;
  padding: 0 5% 8rem;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2;
  position: relative;
  display: block;
`;

const HashTag = styled.section `
  flex-wrap: wrap;
  margin: 0 auto 2rem;
  display: flex;
  max-width: 640px;
  padding: 0 5%;
`;

const HashItem = styled.a `
  display: block;
  margin: 0 1rem .5rem 0;
  font-size: 1rem;
  color: #161616;
  text-decoration: none;
  cursor: pointer;
`;

export default DetailContent;