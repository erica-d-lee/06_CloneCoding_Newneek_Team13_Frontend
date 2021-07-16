import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { value, mainText, mainTitle, detailText } = props;
  const styles = { mainText: mainText, mainTitle: mainTitle, detailText: detailText, };
  return (
    <React.Fragment>
      <P {...styles}>{value}</P>
    </React.Fragment>
  )
};

Text.defaultProps = {
  value: '텍스트',
  mainText: false,
  mainTitle: false,
  detailText: false,
};

const P = styled.p`
  ${(props) => props.mainText ? 'font-size: 1rem': ''};
  ${(props) => props.mainTitle ? 'font-size: 1.5rem': ''};
  ${(props) => props.detailText ? 'font-size: 1.125rem': ''};
`;

export default Text;