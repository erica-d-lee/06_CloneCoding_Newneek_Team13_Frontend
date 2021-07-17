import React from 'react';
import styled from 'styled-components';
import {Economy, ProgressBar} from './';
import {Menu, Button} from '../elements';

const DetailContent = (props) => {
  const { category, title, date, keyword, content } = props;
  const { scrollTop } = document.documentElement;
  return (
    <React.Fragment>
      <div style={{backgroundColor: '#ebebeb', marginTop: '-1px', margin: '0 auto', overflow: 'hidden'}}>
        <Div style={{position: 'relative', display: 'block', letterSpacing: '-.0125rem'}}>
          <PostHead>
            <RunningHead>{category}</RunningHead>
            <Headline>{title}</Headline>
            <HeadDate>{date}</HeadDate>
            <ProgressBar />
          </PostHead>
          <PostBody>
            <div className='Room for Data' style={{padding: '0 0 3rem'}}>{content}</div>
          </PostBody>
          <HashTag>
            <HashItem>{keyword}</HashItem>
            <HashItem>{keyword}</HashItem>
            <HashItem>{keyword}</HashItem>
          </HashTag>
        </Div>
        <Economy />
      </div>
    </React.Fragment>
  )
};

DetailContent.defaultProps = {
  category: '카테고리',
  title: '제목',
  date: '2021/07/17',
  keyword: '#키워드',
  content: '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다',
}

const Div = styled.div`
  @media (max-width: 1360px) {
    max-width: 1040px;
  }
`;

const PostHead = styled.header`
  margin: 0 0 4rem;
  padding: 4rem 5% 5.5rem;
  border-bottom: 1px solid #161616;
  overflow: hidden;
  text-align: center;
  position: relative;
  display: block;
`;

const RunningHead = styled.a`
  color: #fb7800 !important;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

const Headline = styled.h2`
  padding: .5rem 0 2rem;
  font-size: 2.5rem;
  letter-spacing: -.075rem;
  color: #161616;
  font-weight: 700;
  line-height: 1.4;
  word-break: keep-all;
  margin: 0;
  display: block;
`;

const HeadDate = styled.time`
  font-size: 1.125rem;
`;

const PostBody = styled.div`
  max-width: 620px;
  margin: 0 auto;
  padding: 0 5% 8rem;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2;
  position: relative;
  display: block;
`;

const HashTag = styled.section`
  flex-wrap: wrap;
  margin: 0 auto 2rem;
  display: flex;
  max-width: 640px;
  padding: 0 5%;
`;

const HashItem = styled.a`
  display: block;
  margin: 0 1rem .5rem 0;
  font-size: 1rem;
  color: #161616;
  text-decoration: none;
  cursor: pointer;
`;



export default DetailContent;