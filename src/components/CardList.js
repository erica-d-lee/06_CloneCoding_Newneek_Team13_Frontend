import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from '../elements/Button';
import {history} from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as newsActions } from '../redux/modules/news';

const CardList = (props) => {
  const dispatch = useDispatch();
  const [end, setEnd] = useState(12);
  const allnews_list = useSelector(state => state.news.list);
  const news_list = allnews_list.slice(0, end);
  const loadMoreNews = () => {
    if (end === allnews_list.length) {
      return;
    }
    if (0 <= allnews_list.length - end <= 12) {
      setEnd(allnews_list.length)
    } else {
    setEnd(end + 12);
    }
  }
  useEffect(() => {
    dispatch(newsActions.setNewsDB());
  }, []);

  return(
    <React.Fragment>
      <Posts>
        {news_list && news_list.map((n) => {
          return <Card {...n} />
        })}
      </Posts>
      <PostsPagination>
        <Button padding='10px 1.5rem 11px' margin='2rem auto' width='20rem' _onClick={() => {loadMoreNews()}}>더보기</Button>
      </PostsPagination>
    </React.Fragment>
  )
};

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-color: #161616;
  border-style: solid;
  border-width: 1px 0 0 1px;
`;

const PostsPagination = styled.footer`
  display: block;
`;

export default CardList;