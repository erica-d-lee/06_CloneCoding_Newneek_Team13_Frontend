import React from "react";
import {Grid, Text, Button} from "../elements";
import styled from "styled-components";
import {history} from "../redux/configureStore";
import NEWNEEKlogo from "../shared/NEWNEEKlogo.png";
const Footer = () => {
    const search_url = window
        .location
        .pathname
        .split('/')[1]
    return (
        <div>
            {
                search_url === 'searchnews'
                    ? ""
                    : <> < FooterStatic > <p>
                            퀴어 프렌들리한 팀을 위한
                            <MobileBlock>
                                뉴닉 레인보우 가이드<span role="img" aria-label="">🏳️‍🌈</span>
                            </MobileBlock>
                        </p>
                        <Arrow><Line/></Arrow>
                    </FooterStatic>
                    <FooterStatic>
                        <p>3월 8일에 업데이트된
                            <MobileBlock>
                                뉴닉의 여성용어 가이드<span role="img" aria-label="">🍞🌹</span>
                            </MobileBlock>
                        </p>
                        <Arrow><Line/></Arrow>
                    </FooterStatic>
                </>
            }

            <FooterStatic>
                <p>
                    <MobileBlock>오늘까지
                        <b>487회</b>
                        뉴스레터를 발행했고
                    </MobileBlock>
                    <b>
                        351,397명</b>이 구독했어요!
                </p>
                <Arrow><Line/></Arrow>
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
                    <FooterSitemapItem2>
                        <LinkButton>서비스이용약관</LinkButton>
                        <LinkButton>
                            <strong>개인정보처리방침</strong>
                        </LinkButton>
                    </FooterSitemapItem2>
                </FooterSitemap>
                <FooterAddress>
                    <FooterAddressText>
                        ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호:
                        2020-서울마포-2938 / 개인정보보호책임자: 빈다은 / 담당자메일주소: whatsup@newneek.co<br/>서울특별시 마포구 잔다리로 62-1, 2층 (04031)<br/>근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!<br/>
                    </FooterAddressText>
                    <FooterAddressText>
                        <small>ⓒ NEWNEEK Co., Ltd. 2018-2020.</small>
                    </FooterAddressText>
                </FooterAddress>
            </MainFooter>

        </div>
    );
};

const FooterStatic = styled.div `
    height:40px;
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
    cursor: pointer;
    & > span {
        display: inline;
    }
    & > p {
        font-size: 1.5rem;
    }
    @media (max-width: 1360px) {
        & > p {
            font-size: 1.25rem;
            line-height: 1.6;
        };
    };
    @media (max-width: 1080px) {
        & > span {
            display: block;
        }
    }
    &:hover {
        background: white;
        cursor: pointer;
    }
`;

const MobileBlock = styled.span `
    @media (max-width: 1080px) {
        display: block;
    }
`;
const Arrow = styled.div `
    max-width: 67px;
    flex-grow: 1;
    margin: 0 3px 0 11px;
    padding: 17px 0;
`;
const Line = styled.div `
    width: 100%;
    height: 2px;
    background: #000;
    position: relative;
    display: block;
    &::before, &::after {
        background: inherit;
        position: absolute;
        width: 17px;
        height: 2px;
        content: '';
        right: 0;
    }
    &::before {
        transform: rotate(-50deg);
        transform-origin: top right;
    }
    &::after {
        transform: rotate(50deg);
        transform-origin: bottom right;
    }
`;

const MainFooter = styled.div `
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
    @media (max-width: 1360px) {
        padding-top: 3rem;
        padding-bottom: 10rem;
}`;

const FooterAddress = styled.div `
    float: left;
    width: 50%;
    
    @media (max-width: 1360px){
        float: none;
        width: 100%;

    }`;
const FooterAddressLogo = styled.div `
    display: inline-block;
    max-width: 200px;
    margin: 0 0 16px;
    @media (max-width: 1360px) {
        width: 120px;
    }
`;
const FooterSitemap = styled.div `
    line-height: 1.8;
    display: flex;
    float: left;
    width: 50%;
    margin-bottom: 4em;
    position: relative;
    color: #161616;
    align-items: center;
    @media (max-width: 1360px) {
        display: block;
        float: none;
        width: 100%;
        position: relative;
}`;

const FooterSitemapItem = styled.div `
    width: 50%;
    @media (max-width: 1360px) {
        float: left;
        width: 50%;
}`;
const FooterSitemapItem2 = styled.div `
    width: 50%;
    @media (max-width: 1360px) {
        float: none;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        margin-top: 64px;
        padding-top: 8px;
    }
`;

const LinkButton = styled.div `
    align-items: center;
    display: flex;
    margin-right: 1rem;
    margin-bottom: .5rem;
    color: #161616;
    font: 12px;
    color: #161616;
    text-decoration:none;
    letter-spacing: -.0125rem;
    &:hover {
        color: #fb7800;
        cursor: pointer;
    }
`;

const FooterAddressText = styled.div `
    width: 100%;
    margin: 2rem 0 0;
    font-size: 1.0rem;
    color: #161616;
    display: block;
    @media (max-width: 1080px) {
        font-size: 12px;
    }
`;

Footer.defaultProps = {};

export default Footer;