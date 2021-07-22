import React, {useState}from "react";
import styled from "styled-components";
import {history} from "../redux/configureStore";
import {BottomBar} from "../components/";
import { useDispatch } from "react-redux"
const Search = (props) => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const recommend= ["설문조사","델타변이","G7","택배","플랫폼"]
    const write = () =>{
        if (text===""){
            window.alert("검색어를 입력해주세요!");
            return;
        }
        setText();
        history.push(`/searchnews/:keyword=${text}`);  
    };

    const handleChange=(e)=>{
        setText(e.target.value);
    }

    const onKeyPress=(e)=>{
        if(e.key=='Enter'){
            write();
        }
    }
    
        return (
            <React.Fragment>
                    <SearchForm>
                        <TextField>
                            <SearchClose onClick={() => {
                                    history.push("./");
                                }}>
                                <IconArrow/>
                            </SearchClose>
                            <TextFieldInput
                                type="text"
                                id="help-search"
                                placeholder="고슴아 이게 궁금해. (인물, 이슈)"
                                onKeyPress={onKeyPress}
                                name="search"
                                onChange={handleChange}
                                />
                        </TextField>
                            <button style={{display:
                            'none'}} onClick={write}></button>
                        <SearchResult>
                            <SearchOption>
                                <SearchTitle>고슴이 추천 키워드
                                </SearchTitle>
                                {recommend.map(function(n,i){
                                    return( <SearchItem onClick={()=>history.push(`searchnews/:keyword=${n}`)}
                                        key={i}>{n}</SearchItem>)
                                })}
                            </SearchOption>
                        </SearchResult>
                    </SearchForm>
                <BottomBar/>
            </React.Fragment>
);
};

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
    z-index: 5;
`;

const TextField = styled.fieldset `
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
const TextFieldInput = styled.input `
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
