import React from 'react';
import styled from 'styled-components';
import {Economy, ProgressBar} from './';
import {Menu, Button} from '../elements';

const DetailContent = (props) => {
  const { category, title, date } = props;
  const { scrollTop } = document.documentElement;
  return (
    <React.Fragment>
      <div style={{backgroundColor: '#ebebeb', marginTop: '-1px'}}>
        <Div style={{maxWidth: '1360px', position: 'relative', display: 'block', letterSpacing: '-.0125rem'}}>
          <PostHead>
            <RunningHead>{category}</RunningHead>
            <Headline>{title}</Headline>
            <HeadDate>{date}</HeadDate>
            { scrollTop > 0.1 ?
              <ProgressBar /> : '' }
          </PostHead>
        </Div>
        <Economy />
      </div>
    </React.Fragment>
  )
};

DetailContent.defaultProps = {
  category: '카테고리',
  title: '제목',
  date: '2021/07/17'
}

const Div = styled.div`
  margin: 0 auto;
  overflow: hidden;
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



export default DetailContent;