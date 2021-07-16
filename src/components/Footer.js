import React from "react";
import {Grid, Text, Button} from "../elements";
import styled from "styled-components";
const Footer = () => {
    return (
        <FooterStatic>
            <p>
                <span>오늘까지
                    <b>487회</b>
                    뉴스레터를 발행했고</span><br/>
                <b>
                    351,397 명</b>이 구독했어요!
            </p>
        </FooterStatic>

    );
};

const FooterStatic = styled.div `
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 1.25rem 5%;
    border-top: 1px solid #161616;
    background: #ebebeb;
    text-align: left;
    font-size: 1.5rem;
    color: #161616;
    position: relative;
`;

Footer.defaultProps = {};

export default Footer;