import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { _onClick, children, margin, width, padding, is_header } = props;
    const styles = {
        margin: margin,
        width: width,
        padding: padding,
      };
    
      return (
        <React.Fragment>
          { is_header ? ( 
            <SearchButton {...styles} onClick={_onClick}>
            {children} </SearchButton>
          ):(
          <LoadButton {...styles} onClick={_onClick}>
            {children}
            </LoadButton>)}
        </React.Fragment>
      );
 };

Button.defaultProps = {
    _onClick: () => {},
    text: false,
    padding: "11px 18px ",
    width: "240px",
    height: "44px",
    margin: false,
};

const SearchButton = styled.button`
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-color: #ebebeb;
    color: #161616;
    align-items: center;
    justify-content: center;
    
    border: 1px solid #161616;
    box-sizing: border-box;
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

`;
const LoadButton = styled.button`
    width: ${(props) => props.width};
    background-color: #fff;
    color: #161616;
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    border: 1px solid #161616;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    &:hover {
        background-color: #fb7800;
        color: #161616;
    }
`;

export default Button;
