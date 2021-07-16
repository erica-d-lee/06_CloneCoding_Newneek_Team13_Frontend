import React from "react";
import styled from "styled-components";
import NEWNEEKlogo from "../shared/NEWNEEKlogo.png";
import {history} from "../redux/configureStore";


const Header = () => {
    return (
        <React.Fragment>
            <NavbarTop/>
            <Navbar>
            <NavbarInner>
                <NavbarMenu>
                    <NavbarMenuItem>
                    <NavButton> <span>💰</span>경제기본기 </NavButton>
                    <NavButton> <span>🌹</span>여성의날</NavButton>
                    </NavbarMenuItem>
                </NavbarMenu>
                <NavberLogo>
                    <img src= {NEWNEEKlogo}  alt="logo" width="100%"/>
                </NavberLogo>
                <SearchButton onClick={() => {
                                history.push("/search");
                            }}>
                🔍
                </SearchButton>
            </NavbarInner>
           </Navbar>
       
        </React.Fragment>
    );
};

Header.defaultProps = {};

const NavbarTop = styled.div`
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
`;

const Navbar = styled.div`
    background: #ebebeb;
    border-bottom: 1px solid #161616;
    position: relative;
    z-index: 4;
    
`;

const NavbarInner= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1360px;
    margin: 0 auto;
    padding: 3rem 5% 2.5rem; 
`;

const NavbarMenu = styled.div`
display: flex;
position: relative;


`;
const NavbarMenuItem = styled.div`
display: flex;

`;
const NavButton = styled.div`
    align-items: center;
    margin-right: 1.5rem;
    font-size: 1.125rem;
    color: #161616;
    text-align: center;
    position: relative;
    
    
    &: hover {
        color: #fb7800;
        cursor: pointer;
    }
`;

const NavberLogo = styled.div`
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
`;

const SearchButton = styled.button`
width: 48px;
height: 48px;
border: 1px solid #161616;
box-sizing: border-box;
background: none;
cursor: pointer;
font: inherit;
position: relative;
`;

Header.defaultProps = {};

export default Header;
