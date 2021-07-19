import React from 'react';
import styled from 'styled-components';

const Menu = (props) => {
  const { emoji, name, letterSpacing, large, fontWeight, lineHeight, wordBreak, hover, } = props;
  const styles = {
    letterSpacing: letterSpacing,
    large: large,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    wordBreak: wordBreak,
    hover: hover,
  };
  return (
    <React.Fragment>
      <a><Span {...styles}><Span {...styles}>{emoji}</Span>{name}</Span></a>
    </React.Fragment>
  )
};

Menu.defaultProps = {
  emoji: null,
  name: 'name',
  letterSpacing: null,
  large: false,
  fontWeight: null,
  lineHeight: null,
  wordBreak : null,
  hover: null,
};

const Span = styled.span`
  color: #161616;
  font-size: ${(props) => props.large ? '2rem': '1.125rem'};
  letter-spacing: ${(props) => props.letterSpacing};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  word-break: ${(props) => props.wordBreak};
  &:hover {
    ${(props) => props.hover};
  }
`;

export default Menu;