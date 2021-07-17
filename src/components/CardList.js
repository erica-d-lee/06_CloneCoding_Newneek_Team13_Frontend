import React from 'react';
import Card from './Card';
import {history} from '../redux/configureStore';

const CardList = (props) => {
  const {news_list} = props;

  return (
    <React.Fragment>
      <div style={{display: 'flex', flexWrap: 'wrap', position: 'relative', borderStyle: 'solid', borderColor: '#161616', borderWidth: '1px 0 0 1px', borderCollapse: 'collapse'}}>
        { news_list && news_list.map((n) => {
          return <Card {...n} _onClick={() => history.push(`/detailnews/${n.postId}`)}></Card>
        })}
      </div>
    </React.Fragment>
  )
};

export default CardList;