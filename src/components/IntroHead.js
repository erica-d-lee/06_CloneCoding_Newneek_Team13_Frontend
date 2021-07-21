import React, {memo, useRef, useState} from "react";
import {useDispatch} from 'react-redux';
import styled from "styled-components";
import gosumHome from "../shared/gosumHome.png";
import {actionCreators as newsActions} from '../redux/modules/news';

const IntroHead = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const inputM = useRef('');
    const inputN = useRef('');
    const submit = () => {
        if (email === ' ' || email === undefined) {
            window.alert('이메일을 입력해주세요');
            return;
        }
        if (email.indexOf('@') === -1) {
            window.alert('올바른 이메일 형식으로 입력해주세요')
            return;
        }
        if (nickname === ' ' || nickname === undefined) {
            window.alert('닉네임을 입력해주세요');
            return;
        }
        if (!document.getElementById('input_check').checked) {
            window.alert('개인정보 수집·이용에 동의해주세요');
            return;
        }
        dispatch(newsActions.sendMail(email, nickname));
        inputM.current.value = '';
        inputN.current.value = '';
    }

    return (
        <React.Fragment>
            <IntroHeadBar>
                <SubscribeGosum>
                    <img src={gosumHome} alt="gosumHome" width="100%" verticalAlign="middle"/>
                </SubscribeGosum>
                <IntroHeadTitle>
                    <IntroInner>
                        특보!
                        <span>🗞️</span>
                        우리가 시간이 없지,
                        <MobileBlock>
                            세상이 안 궁금하냐!</MobileBlock>
                    </IntroInner>
                </IntroHeadTitle>
                <IntroHeadDescription>
                    <IntroInner>
                        <IntroHeadSubhead>✨지금
                            <b>351,445명</b>이 뉴닉을 읽고 있어요.</IntroHeadSubhead>
                        <IntroHeadMainhead>세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
                            <DesktopBlock>월/수/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.</DesktopBlock>
                        </IntroHeadMainhead>
                        <Subscribe>
                            <TextFiled>
                                <SubInput
                                    type="text"
                                    name="email"
                                    placeholder="이메일 주소"
                                    ref={inputM}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/></TextFiled>
                            <TextFiled>
                                <SubInput
                                    type="text"
                                    name="name"
                                    placeholder="닉네임"
                                    ref={inputN}
                                    onChange={(e) => {
                                        setNickname(e.target.value)
                                    }}/>
                            </TextFiled>
                            <div margin="0.5rem 0px 0px;"></div>
                            <CheckBox>
                                <CheckInput/>
                                <SubscribeAgree type="checkbox" id='input_check'/>
                                <UnderLine>개인정보 수집·이용</UnderLine>에 동의합니다
                            </CheckBox>
                            <SubscribeBtn
                                type='button'
                                onClick={() => {
                                    submit();
                                }}>
                                뉴스레터 무료로 구독하기
                            </SubscribeBtn>
                        </Subscribe>
                    </IntroInner>
                </IntroHeadDescription>
            </IntroHeadBar>
        </React.Fragment>
    );
};

IntroHead.defaultProps = {};

const IntroHeadBar = styled.div `
    position: relative;
`;
const SubscribeGosum = styled.div `
    position: absolute;
    max-width: 480px;
    display: block;
    top: 5rem;
    left: 50%;
    width: 100%;
    max-width: 480px;
    margin-left: 60px;
    @media (max-width: 1080px){
        width:75%;
        left: auto;
        top: auto;
        margin: -2rem auto auto;
        position: relative;
        z-index: 6; 
}`;
const IntroHeadTitle = styled.h1 `
    padding: 1rem 0;
    border-bottom: 1px solid #000;
    font-size: 3rem;
    letter-spacing: -.025rem;
    margin:0px auto;
    @media (max-width: 1080px){
        background: #ebebeb;
        border-top: 1px solid #161616;
        margin-top: -10rem;
        font-size: 2rem;
        text-align: center;
        position: relative;
        z-index: 6;       
    }
`;
const IntroInner = styled.div `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
    display: block;
    @media (max-width: 1080px) {
    max-width: 480px;}
`;
const MobileBlock = styled.div `
    display: inline;
    @media (max-width: 1080px){
        display: block;
    }
`;
const IntroHeadDescription = styled.div `
    padding: 2rem 0 3rem;
    background: #fb7800;
    box-sizing: border-box;
    @media (max-width: 1080px){
    position: relative;
    z-index: 7;}
`;
const IntroHeadSubhead = styled.p `
    max-width: 560px;
    font-size: 1.125rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    position: relative;
    z-index: 1;
    display: block;
`;
const IntroHeadMainhead = styled.p `
    margin-top: 1rem;   
    display: block;
    max-width: 560px;
    font-size: 1.125rem;
    letter-spacing: -.0125rem;
`;

const DesktopBlock = styled.span `
    display: block;
    @media (max-width: 1080px) {
    display: inline;
    }
`;

const Subscribe = styled.form `
    max-width: 400px;
    margin: 1.5rem 0 0;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
`;
const UnderLine = styled.text `
    text-decoration:underline;
`;

const TextFiled = styled.div `
    margin: 0;
    position: relative;`;

const SubInput = styled.input `
    background: #fff;
    margin-top: .5rem;
    display: block;
    width: 100%;
    padding: 11px 1.5rem;
    border: 1px solid #161616;
    box-sizing: border-box;
    color: #161616;
    transition: all 2s;
    outline: none;
    box-shadow: none;
    height: 48px;
    `;

const CheckBox = styled.div `
    display: block;
    padding: .5rem 0;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    display:flex;
`;
const CheckInput = styled.input `
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: checkbox;
    position: absolute;
    outline: auto;
`;

const SubscribeAgree = styled.input `
    background-color: white;
    box-sizing: border-box;
    margin: 3px 12px 3px 4px;
    border: 1px solid #161616;
    width: 16px;
    height: 16px;    
`;

const SubscribeBtn = styled.button `
    background: #161616;
    border: 1px solid #161616;
    color: #fff;
    margin: 1rem 0 0;
    padding-right: 1.75rem;
    display: inline-block;
    min-width: 104px;
    padding: 10px 1.5rem 11px;
    border-radius: 0;
    text-align: center;
    cursor: pointer;
    position: relative;
`;
export default memo(IntroHead);