import React from 'react';
import Card from './Card';

const CardList = (props) => {

  return (
    <React.Fragment>
      <div style={{display: 'flex', flexWrap: 'wrap', position: 'relative', borderStyle: 'solid', borderColor: '#161616', borderWidth: '1px 0 0 1px', borderCollapse: 'collapse'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </React.Fragment>
  )
};

export default CardList;