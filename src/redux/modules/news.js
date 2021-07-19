import { createAction, handleActions } from "redux-actions";
import {produce} from 'immer';

// 액션타입
const SET_NEWS = 'SET_NEWS';
const SET_CATEGORY_NEWS = 'SET_CATEGORY_NEWS';

// 액션생성함수
const setNews = createAction(SET_NEWS, (news_list) => ({news_list}));
const setCategoryNews = createAction(SET_CATEGORY_NEWS, (news_list) => ({news_list}));

// 기본값 정하기
const initialState = {
    list: [],
};

// 액션함수
const setNewsDB = () => {               // 메인페이지 뉴스 목록 불러오기
  return function(dispatch) {
    const axios = require('axios');
    axios.get('http://15.164.244.197/api/main').then((response) => {
      // console.log(response.data);
      dispatch(setNews(response.data.post));
    }).catch((err) => {
      console.log(`메인 페이지 뉴스 불러오기 에러: ${err}`);
    });
  };
};

const setOneNewsDB = (postId) => {        // 상세페이지 개별 뉴스 불러오기
  return function(dispatch) {
    const axios = require('axios');
    axios.get('url').then((response) => {
      // console.log(response.data);
      dispatch(setNews(response.data));
    }).catch((err) => {
      console.log(`상세 페이지 뉴스 불러오기 에러: ${err}`);
    });
  };
};

const setCategoryNewsDB = (category) => {  // 카테고리별 뉴스 목록 불러오기
  return function(dispatch) {
    const axios = require('axios');
    axios.get(`http://15.164.244.197/api/main?category=${category}`).then((response) => {
      // console.log(response.data);
      dispatch(setCategoryNews(response.data));
    }).catch((err) => {
      console.log(`카테고리별 뉴스 불러오기 에러: ${err}`);
    });
  };
};

const sendMail = (email, nickname) => {      // 환영 메일 발송하기
    const axios = require('axios');
    axios.post('http://15.164.244.197/api/mailing').then((response) => {
      // console.log(response.data);
    }).catch((err) => {
      console.log(`환영 메일 발송하기 에러: ${err}`);
    })
}


// 리듀서 
export default handleActions(
  {
    [SET_NEWS]: (state, action) => produce(state, (draft) => {
      draft.list = [...action.payload.news_list];
    }),
    [SET_CATEGORY_NEWS]: (state, action) => produce(state, (draft) => {
      draft.list = [...action.payload.news_list.post];
    })
  },
  initialState
);

// 액션 생성자 
const actionCreators = {
  setNewsDB,
  setOneNewsDB,
  setCategoryNewsDB,
}


export { actionCreators };