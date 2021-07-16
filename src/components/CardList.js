import React from 'react';
import Card from './Card';

const CardList = (props) => {

  return (
    <React.Fragment>
      <div style={{display: 'flex', flexWrap: 'wrap', position: 'relative', border: '1px solid #161616'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </React.Fragment>
  )
};

export default CardList;