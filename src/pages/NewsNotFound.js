import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Footer, Header} from "../components/";
import {actionCreators as newsActions} from "../redux/modules/news"
import {BottomBar} from "../components/";
import {history} from "../redux/configureStore";

const NewsNotFound = (props) => {
    const keyword = props
        .location
        .pathname
        .split("/notfound/")[1]
    const recommend= ["설문조사","델타변이","G7","택배","플랫폼"]

    return (
        <React.Fragment>
            <Header/>
            <NotFound>
                <SearchResult>
                    <h1>
                        <span>
                            {keyword}
                        </span>
                        관련된 이슈를 아직 다루지 않았어요!
                    </h1>

                    <SearchOption>
                        <SearchTitle>고슴이 추천 키워드
                        </SearchTitle>
                        {recommend.map(function(n,i){
                                    return( <SearchItem onClick={()=>history.push(`/searchnews/:$keyword$=${n}`)}
                                        key={i}>{n}</SearchItem>)
                                })}
                    </SearchOption>

                </SearchResult>
            </NotFound>
            <Footer/>
            <BottomBar/>
        </React.Fragment>
    );
};
const NotFound = styled.section `
    width: 90%;
    max-width: 1360px;
    margin: 0px auto;
    padding: 0px 5%;
    position: relative;
    @media (max-width: 820px) {
    max-width: 100%;
    }
    
`;

const SearchResult = styled.section `
    padding: 4rem 0px;
    @media (max-width: 1080px){
        font-size: 12px;
    }
    display: block;
    letter-spacing: -.0125rem;
    & h1 { 
        font-size: 2rem;
        font-weight: 700;
        color: #161616;
        line-height: 1.4;
        word-break: keep-all;
        margin:0;
    }
    & span {
        color: rgb(153, 153, 153);
    }
}


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
export default NewsNotFound;
