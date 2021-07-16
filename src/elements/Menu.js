import React from 'react';
import styled from 'styled-components';

const Menu = (props) => {
  const { Img, name, fontSize, letterSpacing } = props;
  const styles = {
    fontSize: fontSize,
    letterSpacing: letterSpacing,
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
  fontSize: '1.125rem',
  letterSpacing: null,
};

const Span = styled.span`
  color: #161616;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export default Menu;