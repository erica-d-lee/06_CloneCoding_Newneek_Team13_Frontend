import React from 'react';
import styled from 'styled-components';
import {CardList, Category} from './';
import {Menu} from '../elements';

const Body = (props) => {

  return (
    <React.Fragment>
      <Category />
      <div style={{backgroundColor: '#ebebeb', marginTop: '-1px'}}>
        <Div style={{maxWidth: '1360px', margin: '0 auto 0 auto', padding: '0 5% 6rem 5%', position: 'relative', display: 'block', letterSpacing: '-.0125rem'}}>
          <div style={{padding: '4rem 0 2rem 0'}}>
            <Menu emoji='🧨' name=' 제목' large fontWeight='400' lineHeight='1.4' wordBreak='keep-all'/>
          </div>
          <CardList></CardList>
          <button>더보기</button>
        </Div>
      </div>
    </React.Fragment>
  )
};

const Div = styled.div`
  width: 90%;
  @media (max-width: 1360px) {
    max-width: 1040px;
  }
`;

export default Body;