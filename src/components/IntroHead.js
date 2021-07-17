import React from "react";
import styled from "styled-components";
import gosumHome from "../shared/gosumHome.png";

const IntroHead = () => {
    return (
        <React.Fragment>
            <IntroHeadBar>
                <SubscribeGosum>
                <img src={gosumHome} alt="gosumHome" width="100%" verticalAlign= "middle"/>
                </SubscribeGosum>
                <IntroHeadTitle>
                    <IntroInner>
                    특보! <span>🗞️</span> 우리가 시간이 없지, 
                    <MobileBlock>세상이 안 궁금하냐!</MobileBlock>
                    </IntroInner>
                </IntroHeadTitle>
                <IntroHeadDescription>
                <IntroInner>
                    <IntroHeadSubhead>✨지금 <b>351,445명</b>이 뉴닉을 읽고 있어요.</IntroHeadSubhead>
                    <IntroHeadMainhead>세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!  
                    <DesktopBlock>월/수/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.</DesktopBlock>
                    </IntroHeadMainhead>
                    <Subscribe>
                     <TextFiled>
                     <SubInput type="text" name="email" placeholder="이메일 주소"/></TextFiled>
                     <TextFiled>
                     <SubInput type="text" name="name"  placeholder="닉네임" /> </TextFiled>
                     <div margin= "0.5rem 0px 0px;"></div>
                     <CheckBox>
                     <CheckInput/>
                     <SubscribeAgree type="checkbox" />
                     <UnderLine>개인정보 수집·이용</UnderLine>에 동의합니다
                     </CheckBox>
                     <SubscribeBtn>
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
const IntroHeadTitle = styled.text`
    padding: 1rem 0;
    border-bottom: 1px solid #000;
    font-size: 3rem;
    letter-spacing: -.025rem;
    }
    @media (max-width: 1080px){
        background: #ebebeb;
        border-top: 1px solid #161616;
        margin-top: -10rem;
        font-size: 2rem;
        text-align: center;
        position: relative;
        z-index: 6;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        display: block;
}
`;
const IntroInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
    display: block;
    font-weight: 700;
    color: #161616;
    font-size: 3rem;
    letter-spacing: -.025rem;
    text-rendering: optimizeLegibility;
    @media (max-width: 1080px){
        max-width: 480px;
        margin: 0 auto;
        font-size: 2rem;
        text-align: center;
        line-height: 1.4;
        word-break: keep-all;
    }
    }
`;
const MobileBlock= styled.div`
    display: inline;
    font-size: 3rem;
    letter-spacing: -.025rem;
    @media (max-width: 1080px){
        display: block;
        font-size: 2rem;
        text-align: center;
    }
`;
const IntroHeadDescription = styled.div`
    padding: 2rem 0 3rem;
    background: #fb7800;
    box-sizing: border-box;

`;
const IntroHeadSubhead = styled.text`
    max-width: 560px;
    font-size: 1.125rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    position: relative;
    z-index: 1;
    display: block;
    
}
`;
const IntroHeadMainhead = styled.text`
    margin-top: 1rem;   
    display: block;
    max-width: 560px;
    font-size: 1.125rem;
    letter-spacing: -.0125rem;
    font: 14px/1.8 "Noto Sans KR","Apple SD Gothic Neo",sans-serif;
}
`;


const DesktopBlock= styled.text`
    display: block;
    @media (max-width: 1080px) {
    display: inline;
`;

const Subscribe= styled.form`
    max-width: 400px;
    margin: 1.5rem 0 0;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
`;
const UnderLine = styled.text`
    text-decoration:underline
`;
const TextFiled = styled.div`
background: #ebebeb;
letter-spacing: -.0125rem;
margin: 0;
position: relative;
font: 14px
@media (max-width: 1080px){
    font-size: 12px;
}
`;

const SubInput = styled.input`
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
` ;

const CheckBox = styled.div`
    display: block;
    padding: .5rem 0;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    display:flex;
    `;
const CheckInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: checkbox;
    position: absolute;
    outline: auto;
`;

const SubscribeAgree = styled.input`
    background-color: white;
    box-sizing: border-box;
    margin: 3px 12px 3px 4px;
    border: 1px solid #161616;
    width: 16px;
    height: 16px;
   
    
`; 

const SubscribeBtn = styled.button`
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
export default IntroHead;