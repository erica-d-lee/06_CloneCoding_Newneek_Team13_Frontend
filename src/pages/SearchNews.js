import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {Footer, Header, CardList} from "../components/";
import {actionCreators as newsActions} from "../redux/modules/news"

const SearchNews = (props) => {
    const dispatch=useDispatch()
    const [sort,setSort]=useState("date")
    const keyword = window
        .location
        .pathname
        .split('=')[1];
    const keyword_dec=decodeURI(keyword)
    useEffect(()=>{
       dispatch(newsActions.setSearchDB(keyword,sort))
       console.log(keyword,sort)
    },[])
 

    

    return (
        <React.Fragment>
            <Header/>
            <SNMain>
                <h1>
                    <Text>
                      {keyword_dec}</Text>의 검색 결과에요.</h1>
                <Status>🦔고슴이: 개 찾았슴!</Status>
                <Sorting>
                    <STBtn onClick={()=>setSort('date')}>최신순</STBtn>
                    <STBtn2 onClick={()=>setSort('relative')}>관련순</STBtn2>
                </Sorting>
                <CardList/>
            </SNMain>
            <Footer/>
        </React.Fragment>
    );
};

SearchNews.defaultProps = {};

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
    background: none;
    cursor: pointer;
    font: inherit;
    
    appearance: auto;
    display: inline-block;
    align-items: flex-start;
`;

const STBtn2 = styled.button `    
    width: 80px;
    padding: 30px auto;
    border: 1px solid #161616;
    padding: .25rem 0;
    background: #000;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    width: 80px;
    appearance: auto;
    display: inline-block;
    align-items: flex-start;
    position: relative;
    margin="0 0 0 -1px"
`;

export default SearchNews;
