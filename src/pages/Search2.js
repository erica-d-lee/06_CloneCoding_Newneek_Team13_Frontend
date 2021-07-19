import React from "react";
import styled from "styled-components";
import {history} from "../redux/configureStore";

const Search = () => {
    return (
        <React.Fragment>
            <div>
                <SearchForm>
                    <TextFiled>
                        <SearchClose
                            onClick={() => {
                                history.push("/");
                            }}>
                            <IconArrow/>
                        </SearchClose>
                        <TextFildInput
                            type="search"
                            id="help-search"
                            placeholder="고슴아 이게 궁금해. (인물, 이슈)"
                            name="search"/>
                    </TextFiled>
                    <SearchResult>
                        <SearchOption>
                            <SearchTitle>고슴이 추천 키워드
                            </SearchTitle>
                            <SearchItem>설문조사</SearchItem>
                            <SearchItem>델타변이</SearchItem>
                            <SearchItem>G7</SearchItem>
                            <SearchItem>택배</SearchItem>
                            <SearchItem>플랫폼</SearchItem>
                        </SearchOption>
                    </SearchResult>
                </SearchForm>
            </div>
        </React.Fragment>
    );
};

Search.defaultProps = {};

const SearchForm = styled.form `
    background: #ebebeb;
    max-width: 640px;
    margin: 0 auto;
    padding: 1rem 5%;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 6;
`;

const TextFiled = styled.fieldset `
    border: 0;
    margin: 0px auto;
    position: relative;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
`;
const SearchClose = styled.button `  
    box-sizing: border-box;
    width: 52px;
    height: 52px;    
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 1em; 
    border: none;
    background: none;
    cursor: pointer;
`;

const IconArrow = styled.i `
    height: 52px;
    font-size: 1.5rem;
    position: relative;
    transform: rotate(180deg);
    position: relative;
    cursor: pointer;
    &::before {
        content: "";
        position: absolute;
        border-top: 2px solid #161616;
        border-left: 2px solid #161616;
        top: 50%;
        width: 6px;
        height: 6px;
        right: -2px;
        transform: translate(50%,-50%) rotate(135deg)};
    &::after {
        content: "";
        position: absolute;
        background-color: #161616;
        top: 50%;
        right: -5px;
        width: 12px;
        height: 2px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%)};      
`;
const TextFildInput = styled.input `
    font-weight:bolder;
    height: 52px;
    font-size: 1.125rem;
    display: block;
    width: 100%;
    padding: 10px 40px 11px 4.0rem;
    border: 1px solid #161616;
    box-sizing: border-box;
    color: #161616;
    transition: all .2s;
    outline: none;
    box-shadow: none;
    cursor: text;
    margin: 0em;
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

export default Search;
