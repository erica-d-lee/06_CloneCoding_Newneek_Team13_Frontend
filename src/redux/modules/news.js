import { createAction, handleActions } from "redux-actions";
import {produce} from 'immer';
import axios from 'axios';
import {history} from '../configureStore';

// 액션타입
const SET_NEWS = 'SET_NEWS';

// 액션생성함수
const setNews = createAction(SET_NEWS, (news_list) => ({news_list}));

// 기본값 정하기
const initialState = {
    list: [],
};

// 액션함수
const setNewsDB = () => {               // 메인페이지 뉴스 목록 불러오기
  return function(dispatch) {
    const axios = require('axios');
    axios.get('url').then((response) => {
      dispatch(setNews(response.data))
    }).catch((err) => {
      console.log(`메인 페이지 뉴스 불러오기 에러: ${err}`);
    })
  }
};

// 리듀서 
export default handleActions(
  {
    [SET_NEWS]: (state, action) => produce(state, (draft) => {
      draft.list = [...action.payload.news_list];
    })
  },
  initialState
);

// 액션 생성자 
const actionCreators = {
  setNewsDB,
}


export { actionCreators };