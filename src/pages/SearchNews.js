import React, {useEffect, useState, } from "react";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Footer, Header, CardList,Spinner} from "../components/";
import {actionCreators as newsActions} from "../redux/modules/news"
import {BottomBar} from "../components/";

const SearchNews = (props) => {

    const dispatch=useDispatch()
    const loading = useSelector((state) => state.news.is_loading);
    const newsList=useSelector(state=>state.news.list)

    const [sort,setSort]=useState("date")
    const keyword = window.location.pathname.split('=')[1];
    const keyword_dec=decodeURI(keyword)
    
    useEffect(()=>{
        dispatch(newsActions.setSearchDB(keyword_dec,sort))
    },[])
  
    
    return (
        <>
        {loading ? (
            <Spinner />
          ) : (
        <React.Fragment>
            <Header/>
            <SNMain>
                <h1>
                    <Text>
                      {keyword_dec}</Text>의 검색 결과에요.</h1>
                <Status>🦔고슴이: {newsList.length}개 찾았슴!</Status>
                <Sorting>
                    {sort === 'relative' ? 
                    <>
                    <STBtn2 onClick={()=>setSort('date')}>최신순</STBtn2>
                    <STBtn onClick={()=>setSort('relative')}>관련순</STBtn>
                    </>
                    :
                    <>
                    <STBtn onClick={()=>setSort('date')}>최신순</STBtn>
                    <STBtn2 onClick={()=>setSort('relative')}>관련순</STBtn2>
                    </>
                    }
                </Sorting>
                <CardList keyword={keyword}/>
          </SNMain>
            <Footer/>
            <BottomBar/>
        </React.Fragment>
   )} </>
    );
};



const SNMain = styled.section `
    margin-bottom: 6rem;
    width: 90%;
    max-width: 1360px;
    margin: 0px auto;
    padding: 0px 5%;
    position: relative;
    display: block;
    @media (max-width: 1360px) {
        max-width: 1040px;
    }
`;

const Text = styled.text `
    color: rgb(153, 153, 153);
    font-size: 2rem;
    font-weight: 500;
`;
const Status = styled.span `
    display: block;
    margin: .5rem 0 0;
    font-size: 1.25rem;
    font-weight: 400;
`;

const Sorting = styled.div `
    margin: 2rem 0 1rem;
    display: block;
`;

const STBtn = styled.button `
    width: 80px;
    border: 1px solid #161616;
    padding: .25rem 0;
    background: #000;
    cursor: pointer;
    font: inherit;
    appearance: auto;
    display: inline-block;
    align-items: flex-start;
    color:white;

    
`;

const STBtn2 = styled.button ` 
    width: 80px;
    border: 1px solid #161616;
    padding: .25rem 0;
    background: none;
    cursor: pointer;
    font: inherit;
    appearance: auto;
    display: inline-block;
    align-items: flex-start;
`;
const SearchResult = styled.div `
    display: block;
    letter-spacing: -.0125rem;
`;
const SearchOption = styled.div `
    padding: 2rem 0px 3rem;
    display: block;


`;
const SearchTitle = styled.div `
    margin: 1rem 0px;
    font-size: 1.25rem;
    font-weight: 700;
    color: #161616;
    line-height: 1.4;
    word-break: keep-all;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

`;

const SearchItem = styled.div `
    display: block;
    padding: 0.5rem 0px;
    color: rgb(22, 22, 22);
    text-decoration: none;
    cursor: pointer;
`;
export default SearchNews;
