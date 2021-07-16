import React from 'react';
import Text from '../elements/Text';
import logo from '../shared/NEWNEEKlogo.png';

const Card = (props) => {
  const { img, value, title, date, category, thumbnail, emoji, content } = props;

  if (thumbnail) {
    return (                          // 썸네일 있을 때
      <React.Fragment>
        <a href style={{boxSizing: 'border-box', position: 'relative', display: 'block', border: '1px solid #161616', cursor: 'pointer', width: 'auto', height: 'auto', overflow: 'hidden'}}>
          <div>
            <img src={thumbnail} style={{width: 'auto', height: 'auto', overflow: 'hidden', boxSizing: 'border-box', position: 'relative', verticalAlign: 'middle'}} alt=''></img>
            <div style={{padding: '1.5rem 1.75rem', display: 'block'}}>
              <Text mainTitle value={title} margin='0 0 0.5rem 0' fontWeight='700' lineHeight='1.4' wordBreak='keep-all'/>
              <Text span value={date} padding='0' margin='0 1em 0 0'/>
              <Text span value={category} />
            </div>
          </div>
        </a>
      </React.Fragment>
    )
  } else {
    return (                          // 썸네일 없을 때
      <React.Fragment>
        <a href style={{boxSizing: 'border-box', position: 'relative', display: 'block', border: '1px solid #161616', cursor: 'pointer', width: 'auto', height: 'auto', overflow: 'hidden'}}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '1.5rem 1.75rem', display: 'block', boxSizing: 'border-box'}}>
              <Text span value={emoji} display='block' margin='-1rem 0 0 0' fontSize='3rem'/>
              <Text mainTitle value={title} margin='0.5rem 0 1rem 0' fontWeight='700' lineHeight='1.4' wordBreak='keep-all'/>
              <Text mainText value={content} display='-webkit-box' margin='0 0 1.5rem 0' overflow='hidden' textOverflow='ellipsis' whiteSpace='normal' height='3.6em' textAlign='left' wordWrap='break-word' wlc='2' wbo='vertical'/>
              <Text span value={date} padding='0' margin='0 1em 0 0' position='absolute' left='1.75rem' bottom='1.5rem'/>
              <Text span value={category} position='absolute' left='1.75rem' bottom='1.5rem'/>
            </div>
          </div>
        </a>
      </React.Fragment>
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

export default Card;