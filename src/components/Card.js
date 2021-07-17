import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';
import logo from '../shared/NEWNEEKlogo.png';

const Card = (props) => {
  const { img, value, title, date, category, thumbnail, emoji, content } = props;

  if (thumbnail) {
    return (                          // 썸네일 있을 때
      <CardBox>
        <a href style={{boxSizing: 'border-box', position: 'relative', display: 'block', borderStyle: 'solid', borderColor: '#161616', borderWidth: '0 1px 1px 0', borderCollapse: 'collapse', cursor: 'pointer', height: 'auto', overflow: 'hidden', backgroundColor: '#ebebeb'}}>
          <div>
            <img src={thumbnail} style={{width: 'auto', height: 'auto', overflow: 'hidden', boxSizing: 'border-box', position: 'relative', verticalAlign: 'middle'}} alt=''></img>
            <div style={{padding: '1.5rem 1.75rem', display: 'block'}}>
              <Text mainTitle value={title} margin='0 0 0.5rem 0' fontWeight='700' lineHeight='1.4' wordBreak='keep-all' mbs='1em' mbe='1em'/>
              <Text span value={date} padding='0' margin='0 1em 0 0'/>
              <Text span value={category} />
            </div>
          </div>
        </a>
      </CardBox>
    )
  } else {
    return (                          // 썸네일 없을 때
      <CardBox>
        <a href style={{boxSizing: 'border-box', position: 'relative', display: 'block', borderStyle: 'solid', borderColor: '#161616', borderWidth: '0 1px 1px 0', borderCollapse: 'collapse', cursor: 'pointer', width: 'auto', height: 'auto', overflow: 'hidden'}}>
          <div style={{width: '100%', height: '100%', position: 'absolute'}}>
            <div style={{padding: '1.5rem 1.75rem', display: 'block', boxSizing: 'border-box'}}>
              <Text span value={emoji} display='block' margin='-1rem 0 0 0' fontSize='3rem'/>
              <Text mainTitle value={title} margin='0.5rem 0 1rem 0' fontWeight='700' lineHeight='1.4' wordBreak='keep-all'/>
              <Text mainText value={content} display='-webkit-box' margin='0 0 1.5rem 0' overflow='hidden' textOverflow='ellipsis' whiteSpace='normal' height='3.6em' textAlign='left' wordWrap='break-word' wlc='2' wbo='vertical'/>
              <Text span value={date} padding='0' margin='0 1em 0 0' position='absolute' left='1.75rem' bottom='1.5rem'/>
              <Text span value={category} position='absolute' left='1.75rem' bottom='1.5rem'/>
            </div>
          </div>
        </a>
      </CardBox>
    )
  }
};

Card.defaultProps = {
  value: 'value',
  thumbnail: logo,
  title: 'title',
  date: 'date',
  category: 'category',
  emoji: '🧨',
  content: 'content',
}

const CardBox = styled.div`
  width: 25%;
  @media (max-width: 1360px) {
    width: 33.3333%;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default Card;