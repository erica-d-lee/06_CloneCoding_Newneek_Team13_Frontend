import React from 'react';
import Card from './Card';
import {history} from '../redux/configureStore';

const CardList = (props) => {
  let fake_list = [];
  let i;
  for (i = 0; i < 12; i++) { 
    fake_list.push(i)
  };

  return (
    <React.Fragment>
      <div style={{display: 'flex', flexWrap: 'wrap', position: 'relative', borderStyle: 'solid', borderColor: '#161616', borderWidth: '1px 0 0 1px', borderCollapse: 'collapse'}}>
        { fake_list.map((i) => {
          return <Card _onClick={() => history.push('/detailnews')}></Card>
        })}
      </div>
    </React.Fragment>
  )
};

export default CardList;