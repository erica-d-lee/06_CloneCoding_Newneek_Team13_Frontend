import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from '../elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as newsActions } from '../redux/modules/news';

const CardList = (props) => {
  const dispatch = useDispatch();
  const [end, setEnd] = useState(12);      
  const all_news = useSelector(state => state.news.list);
  const allnews_list = all_news.slice(0, all_news.length).sort(function(a, b) {                                   
    const dateA = a.date;                 
    const dateB = b.date;
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    if (dateA === dateB) return 0;
  });

  useEffect(() => {                     
    dispatch(newsActions.setNewsDB());
  }, []);

  const news_list = allnews_list.slice(0, end); 
  const loadMoreNews = () => {
    if (end >= allnews_list.length) {
      window.alert('마지막 목록입니다!');
      return;
    }
    setEnd(end + 12);
  }

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