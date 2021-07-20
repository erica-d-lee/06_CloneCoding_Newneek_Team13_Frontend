import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from '../elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as newsActions } from '../redux/modules/news';import {Helmet} from 'react-helmet';

const CardList = (props) => {
  const dispatch = useDispatch();
  const {category,keyword} = props;
  const [end, setEnd] = useState(12);    // 마지막 뉴스 번호를 12로 초기화
  const all_news = useSelector(state => state.news.list);
  const allnews_list = all_news.slice(0, all_news.length).sort(function(a, b) {                                   // 날짜 기준 내림차순 정렬
    const dateA = a.date;                 
    const dateB = b.date;
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    if (dateA === dateB) return 0;
  });

  useEffect(() => {                    // 카테고리가 바뀔 때마다
    if (category) {                    // 카테고리가 있으면(메인이 아니면),
      const word = category.split(' ')[1];
      // console.log(word);
      dispatch(newsActions.setCategoryNewsDB(word)); // 카테고리별 불러오기
    }else if(keyword){
      return;
    } 
    
    else {                          // 카테고리가 없으면(메인이면),
      dispatch(newsActions.setNewsDB()); // 전체 목록 불러오기
    }
  }, [category]);

  const news_list = allnews_list.slice(0, end); // 목록을 12개까지 자름
  const loadMoreNews = () => {            // 더보기 버튼 누르면 이 함수 호출
    if (end >= allnews_list.length) {     // 더 이상 불러올 목록이 없으면,
      window.alert('마지막 목록입니다!'); // 경고창 띄우고
      return;                             // 리턴
    }                                     // 불러올 다음 목록이 있으면,
    setEnd(end + 12);                     // 마지막 뉴스 번호에 12를 더함
  }

  return(
    <React.Fragment>
      { category && 
        <Helmet>
          <title>'{category.split(' ')[1]}' 콘텐츠</title>
        </Helmet>
      }
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
`;

const PostsPagination = styled.footer`
  display: block;
`;

export default CardList;