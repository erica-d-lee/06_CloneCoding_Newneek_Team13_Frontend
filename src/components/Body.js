import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {CardList, Category, Economy} from './';
import {Menu, Button} from '../elements';

const Body = (props) => {
  const url = window.location.pathname;
  const [main, setMain] = useState(false);
  useEffect(() => {
    if (url === '/') {
      setMain(true);
    }
    console.log(main);
  }, []);

  return (
    <React.Fragment>
      <Category />
      <HomeRecent>
      { main ? '' : 
        <div style={{padding: '4rem 0 2rem 0'}}>
          <Menu emoji='🧨' name=' 제목' large fontWeight='400' lineHeight='1.4' wordBreak='keep-all'/>
        </div> }
        <CardList />
      </HomeRecent>
      <Economy />
    </React.Fragment>
  )
};

const HomeRecent = styled.section`
  width: 90%;
  max-width: 1360px;
  margin: -3px auto 0px;
  padding: 0px 5%;
  position: relative;
  @media (max-width: 1360px) {
    max-width: 1040px;
  display: block;
  }
`;



export default Body;