import React from "react";
import {Grid, Text, Button} from "../elements";
import styled from "styled-components";
import {history} from "../redux/configureStore";
import NEWNEEKlogo from "../shared/NEWNEEKlogo.png";
const Footer = () => {
    return (
        <div>
        <FooterStatic>
            <p>
                <span>오늘까지
                    <b>487회</b>
                    뉴스레터를 발행했고</span>
                <b>351,397 명</b>이 구독했어요!
            </p>
            <div class="cta-arrow ">
                <div class="line"></div>
            </div>
           
        </FooterStatic>
        <MainFooter>
            <FooterAddress>
                <FooterAddressLogo>
            <img src={NEWNEEKlogo} alt="logo" width="100%"/>
            </FooterAddressLogo>
            </FooterAddress>
            <FooterSitemap>
                <FooterSitemapItem>
                    <LinkButton>뉴닉탄생기</LinkButton>
                    <LinkButton>고객센터</LinkButton>
                    <LinkButton>고슴이와 친구들</LinkButton>
                </FooterSitemapItem>
                <FooterSitemapItem>
                    <LinkButton>인스타그램</LinkButton>
                    <LinkButton>고슴책</LinkButton>
                    <LinkButton>2020 총선</LinkButton>
                </FooterSitemapItem>
                <FooterSitemapItem margin-right= "1rem" display="flex">
                    <LinkButton>서비스이용약관</LinkButton><LinkButton><strong>개인정보처리방침</strong></LinkButton>
                </FooterSitemapItem>
            </FooterSitemap>    
            <FooterAddress>
                <FooterAddressText>
                    ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호: 2020-서울마포-2938 / 개인정보보호책임자: 빈다은 / 담당자메일주소: whatsup@newneek.co<br/>서울특별시 마포구 잔다리로 62-1, 2층 (04031)<br/>근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!<br/>
                </FooterAddressText>
                <FooterAddressText>
                <small>ⓒ NEWNEEK Co., Ltd. 2018-2020.</small>
                </FooterAddressText>
            </FooterAddress>
      
            
        </MainFooter>

        </div>
    );
};

const FooterStatic = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 5%;
    border-top: 1px solid #161616;
    background: #ebebeb;
    text-align: left;
    font-size: 1.5rem;
    color: #161616;
    position: relative;
    letter-spacing: -.0125rem;
    &: hover {
        background: white;
        cursor: pointer;
    }`;

const MainFooter= styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 auto;
    padding: 4rem 5% 6rem;
    background: #ebebeb;
    border-top: 1px solid #161616;
    box-sizing: border-box;
    position: relative;
    z-index: 4;
    `;

const FooterAddress = styled.div`
    float: left;
    width: 50%;
    @media (max-width: 1360px){
        float: none;
        width: 100%;
    }`;
const FooterAddressLogo = styled.div`
    display: inline-block;
    max-width: 200px;
    margin: 0 0 16px;
    @media (max-width: 1360px) {
    width: 120px;}
`;
 
const FooterSitemap= styled.div`
    line-height: 1.8;
    display: flex;
    float: left;
    width: 50%;
    margin-bottom: 4em;
    position: relative;
    color: #161616;
    align-items: center;}`;

const FooterSitemapItem= styled.div`
    width: 50%;
    @media (max-width: 1360px) {
    float: left;
    width: 50%;}`;

    
const LinkButton= styled.div`
    align-items: center;
    display: flex;
    margin-bottom: .5rem;
    color: #161616;
    font: 12px
    color: #161616;
    text-decoration:none;
    letter-spacing: -.0125rem;
    &: hover {
        color: #fb7800;
        cursor: pointer;
    }`;

const FooterAddressText = styled.div`
    width: 100%;
    margin: 2rem 0 0;
    font-size: 1.0rem;
    color: #161616;
    display: block;
`;
Footer.defaultProps = {};

export default Footer;