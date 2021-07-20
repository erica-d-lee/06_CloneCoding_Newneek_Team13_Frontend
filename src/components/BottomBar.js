import React from 'react';
import styled from 'styled-components';

const BottomBar = () => {
    return (
    <React.Fragment>
        <Bottombar>
        <A class="is-active" href="/"><Span role="img" aria-label="" class="emoji">🏠</Span><Span2>홈</Span2></A>
        <A class="" href="/search"><Span role="img" aria-label="" class="emoji">🔍</Span><Span2>검색</Span2></A>
        <A class="" href="/"><Span role="img" aria-label="" class="emoji">💰</Span><Span2>경제기본기</Span2></A>
        <A href="/" class=""><Span
        role="img" aria-label="" class="emoji">🌹</Span><Span2>여성의 날</Span2></A>
        <A class="" href="/"><Span role="img" aria-label="" class="emoji">🙍</Span><Span2>마이페이지</Span2></A>
        </Bottombar>
    </React.Fragment>
    );
};

BottomBar.defaultProps = {};

const Bottombar = styled.div`
    display: none;
    justify-content: space-around;
    width: 100%;
    padding: .25rem 0 calc(env(safe-area-inset-bottom) + .25rem);
    background: #fff;
    border-top: 1px solid #161616;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 7;
    @media (max-width: 1080px){
        display: flex ;
    }
`;
const A = styled.a`
    display: block;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    color: #666;
    `;

const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray100);
    overflow: hidden;
    border-radius: 0;
    position: relative;
    width: 32px;
    height: 32px;
    margin: 0 auto;
    font-size: 1.25rem;
`;
const Span2 = styled.span`
    display: block;
    margin-top: -.25rem;
    font-size: 11px;
    transition: all .4s ease;
`;

export default BottomBar ;