import React from 'react';
import styled from 'styled-components';

const Menu = (props) => {
  const { Img, name, fontSize, letterSpacing, large } = props;
  const styles = {
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    large: large,
  };
  return (
    <React.Fragment>
      <a><Span {...styles}><Span {...styles}>{Img}</Span>{name}</Span></a>
    </React.Fragment>
  )
};

Menu.defaultProps = {
  Img: '🧨',
  name: 'name',
  letterSpacing: null,
  large: false,
};

const Span = styled.span`
  color: #161616;
  cursor: pointer;
  font-size: ${(props) => props.fontSize ? '2rem': '1.125rem'};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export default Menu;