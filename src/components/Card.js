import React from 'react';
import styled from 'styled-components';
import Text from '../elements/Text';
import logo from '../shared/NEWNEEKlogo.png';

const Card = (props) => {
  const { postId, category, title, thumbnail, plainContent, date } = props;
  const emoji_list = {'μ§μ½': 'π ', 'κ΅­λ΄μ μΉ': 'βοΈ', 'μΈκ³': 'π', 'νν¬': 'π€', 'κ²½μ ': 'π°', 'λΈλ/μΌ': 'πͺ', 'νκ²½': 'π³', 'μ¬μ±': 'π§', 'μ½λ‘λ19': 'π·'};
  const emoji = category ? emoji_list[category] : 'π';

    if (thumbnail) { // μ΄λ―Έμ§ μμ λ
        return (
            <React.Fragment>
                <CardBox href={`/detailnews/${postId}`}>
                    <CardInner>
                        <CardThumbnail>
                            <Image src={thumbnail} alt=''></Image>
                        </CardThumbnail>
                        <CardBody>
                            <Text
                                mainTitle="mainTitle"
                                value={title}
                                margin='0 0 .5rem'
                                fontWeight='700'
                                lineHeight='1.4'
                                wordBreak='keep-all'
                                display='block'
                                style={{
                                    filter: 'grayscale(100%)'
                                }}></Text>
                            <CardDate>{date}</CardDate>
                            <CardCategory>{category}</CardCategory>
                        </CardBody>
                    </CardInner>
                </CardBox>
            </React.Fragment>
        )
    } else { // μ΄λ―Έμ§ μμ λ
        return (
            <React.Fragment>
                <CardBox href={`/detailnews/${postId}`}>
                    <CardInner2>
                        <CardBody>
                            <CardEmoji>{emoji}</CardEmoji>
                            <Text
                                mainTitle="mainTitle"
                                value={title}
                                margin='.5rem 0 1rem'
                                fontWeight='700'
                                lineHeight='1.4'
                                wordBreak='keep-all'
                                display='block'
                                style={{
                                    filter: 'grayscale(100%)'
                                }}/>
                            <Text
                                mainText="mainText"
                                value={plainContent}
                                display='-webkit-box'
                                margin='0 0 1.5rem'
                                overflow='hidden'
                                textOverflow='ellipsis'
                                whiteSpace='normal'
                                height='3.6em'
                                textAlign='left'
                                wordWrap='break-word'
                                wlc='2'
                                wbo='vertical'
                                style={{
                                    filter: 'grayscale(100%)'
                                }}/>
                            <CardDate2>{date}</CardDate2>
                            <CardCategory2>{category}</CardCategory2>
                        </CardBody>
                    </CardInner2>
                </CardBox>
            </React.Fragment>
        )
    }
};

Card.defaultProps = {
    value: 'value',
    thumbnail: logo,
    title: 'μ λͺ©',
    date: 'λ μ§',
    category: 'μΉ΄νκ³ λ¦¬',
    emoji: 'π§¨',
    plaincontent: 'μμ κΈμλ‘λ§ μ΄λ£¨μ΄μ§ λ΄μ©',
    _onClick: () => {}
}

const CardBox = styled.a `
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
  background: #ebebeb;
  box-sizing: border-box;
  position: relative;
  display: block;
  color: #161616;
  box-shadow:
    1px 0 0 0 #161616,
    0 1px 0 0 #161616,
    1px 1px 0 0 #161616,
    1px 0 0 0 #161616 inset,
    0 1px 0 0 #161616 inset;
  cursor: pointer;
  text-decoration: none;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  &:hover {
    background-color: #fff;
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
  }
`;

const CardInner = styled.div `
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: block;
`;

const CardThumbnail = styled.figure `
  width: auto;
  height: auto;
  border-bottom: 1px solid #161616;
  border-radius: 0;
  overflow: hidden;
  background: #ebebeb;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  display: block;
`;

const Image = styled.img `
  vertical-align: middle;
  width: 100%;
  border: 0;
`;

const CardBody = styled.div `
  padding: 1.5rem 1.75rem;
  box-sizing: border-box;
  display: block;
`;

const CardDate = styled.time `
  padding: 0;
  margin-right: 1em;
`;

const CardCategory = styled.i `
  font-style: normal;
`;

const CardInner2 = styled.div `
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 30%;
  }
`;

const CardEmoji = styled.span `
  display: block;
  margin-top: -1rem;
  font-size: 3rem;
`;

const CardDate2 = styled.time `
  position: absolute;
  left: 1.75rem;
  bottom: 1.5rem;
  padding: 0;
  margin-right: 1em;
`;

const CardCategory2 = styled.i `
  position: absolute;
  left: 8.3rem;
  bottom: 1.5rem;
  font-style: normal;
`;

export default Card;