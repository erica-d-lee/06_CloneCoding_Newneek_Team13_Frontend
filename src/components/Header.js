import React from "react";
import styled from "styled-components";
import NEWNEEKlogo from "../shared/NEWNEEKlogo.png";
import searchbtn from "../shared/searchbtn.PNG";
import {history} from "../redux/configureStore";

const Header = () => {
    return (
        <React.Fragment>
            <NavbarTop>
                <NavbarTopIn/>
            </NavbarTop>
            <Navbar>
                <NavbarInner>
                    <NavbarMenu>
                        <NavbarMenuItem>
                            <NavButton>
                                <span>💰</span>경제기본기
                            </NavButton>
                            <NavButton>
                                <span>🌹</span>여성의 날</NavButton>
                        </NavbarMenuItem>
                    </NavbarMenu>
                    <NavberLogo
                        onClick={() => {
                            history.push('/');
                            window
                                .location
                                .reload();
                        }}>
                        <img
                            src={NEWNEEKlogo}
                            alt="logo"
                            style={{
                                width: "100%"
                            }}/>
                    </NavberLogo>
                    <SearchButton
                        onClick={() => {
                            history.push("/search");
                        }}>
                        <img
                            src={searchbtn}
                            alt="searchbtn"
                            style={{
                                width: "110%",
                                height: "100%"
                            }}/>
                    </SearchButton>
                </NavbarInner>
            </Navbar>
        </React.Fragment>
    );
};

Header.defaultProps = {};

const NavbarTop = styled.div `
    height: 30px;
    background: #fff;
    position: relative;
 
`;
const NavbarTopIn = styled.div `
    background: linear-gradient(-45deg,#ebebeb 11px,transparent 0),linear-gradient(45deg,#ebebeb 11px,transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 24px 24px;
    content: " ";
    display: block;
    position: absolute;
    top: 6px;
    left: 0;
    width: 100%;
    height: 32px;
    z-index: 7;
    @media (max-width: 1080px){
        font-size: 12px;
        &::before {
            background: linear-gradient(-45deg,#ebebeb 11px,transparent 0),linear-gradient(45deg,#ebebeb 11px,transparent 0);
            background-size: 16px 16px;
            background-repeat: repeat-x;
            top: 14px;
            left: 0;
            height: 16px;
            z-index: 7;}
        &::after {
                background: linear-gradient(
            -45deg
            ,#ebebeb 11px,transparent 0),linear-gradient(
            45deg
            ,#ebebeb 11px,transparent 0);
                background-size: 16px 16px;
                background-repeat: repeat-x;
                top: 14px;
                left: 0;
                height: 16px;
                z-index: 7;
            }
}
`;
const Navbar = styled.div `
    background: #ebebeb;
    border-bottom: 1px solid #161616;
    position: relative;
    z-index: 4;
`;

const NavbarInner = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1360px;
    margin: 0 auto;
    padding: 3rem 5% 2.5rem;
    @media (max-width: 1080px) {
        padding-top: 3.5rem;
        padding-bottom: 4rem;
    };
`;

const NavbarMenu = styled.div `
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    @media (max-width: 1080px){
        display: block;
        height: auto;
        margin-left: 0;
        padding: 12rem 0;
        box-sizing: border-box;
        background: #ebebeb;
        opacity: 0;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 8;
        transition: all .8s cubic-bezier(.165,.84,.44,1);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
`;
const NavbarMenuItem = styled.div `
    display: flex;
    @media (max-width: 1080px){
        display: block;
        padding-left: 5%;
        padding-right: 5%;
        font-size: 2rem;
}
`;
const NavButton = styled.div `
    align-items: center;
    margin-right: 1.5rem;
    font-size: 1.125rem;
    color: #161616;
    text-align: center;
    position: relative;
    &:hover {
        color: #fb7800;
        cursor: pointer;
    }
`;

const NavberLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-rendering: optimizeLegibility;
    cursor: pointer;
    @media (max-width: 1080px) {
        width: 180px;
    }
`;

const SearchButton = styled.button `
    width: 48px;
    height: 48px;
    border: 1px solid #161616;
    box-sizing: border-box;
    background: none;
    cursor: pointer;
    position: relative;
    @media (max-width: 1080px) {
    width: 40px;
    height: 40px;
    display: none;
}
`;

Header.defaultProps = {};

export default Header;
