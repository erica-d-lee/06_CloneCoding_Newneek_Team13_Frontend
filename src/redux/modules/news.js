import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';
import {history} from '../configureStore';

// 액션타입
const SET_NEWS = 'SET_NEWS';
const DETAIL_NEWS='DETAIL_NEWS';
const SET_CATEGORY_NEWS = 'SET_CATEGORY_NEWS';

const SET_SEARCH ='SET_SEARCH';
const GET_SEARCH ='GET_SEARCH';


// 액션생성함수
const setNews = createAction(SET_NEWS, (news_list) => ({news_list}));
const detailNews = createAction(DETAIL_NEWS, (news_list) => ({news_list}));
const setCategoryNews = createAction(SET_CATEGORY_NEWS, (news_list) => ({news_list}));

const setSearch= createAction(SET_SEARCH, (news_list)=> ({news_list}));
const getSearch= createAction(GET_SEARCH, (text)=>({text}));


// 기본값 정하기
const initialState = {
    list: []
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

const setOneNewsDB = (postId) => { // 상세페이지 개별 뉴스 불러오기
    return function (dispatch) {
      
        const axios = require('axios');
        axios
            .get(`http://15.164.244.197/api/detail/${postId}`)
            .then((response) => {
                console.log(response.data.detail);
                dispatch(detailNews(response.data.detail));
            })
            .catch((err) => {
                console.log(`상세 페이지 뉴스 불러오기 에러: ${err}`);
            });
    };
};


const setCategoryNewsDB = (category) => {
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

const getSearchDB = () => {
  return function (dispatch) {
    const axios = require('axios');  
    axios.get('http://15.164.244.197/api/search?keyword=${}sort=${}')
          .then((response) => {
              console.log(setSearch(response.data));
              dispatch(setSearch(response.data));
          })
          .catch((err) => {
              console.log(`검색결과 불러오기 에러: ${err}`);
          });
  };
};


export default handleActions({
  [SET_NEWS]: (state, action) => produce(state, (draft) => {
    draft.list = [...action.payload.news_list];
  }),
  [DETAIL_NEWS]: (state, action) => produce(state, (draft) => {
    draft.list.push(action.payload.news_list);
  }),
  [SET_CATEGORY_NEWS]: (state, action) => produce(state, (draft) => {
    draft.list = [...action.payload.news_list.post];
  }),
  }, initialState);

// 액션 생성자
const actionCreators = {
    setNewsDB,
    setOneNewsDB,
    setCategoryNewsDB,
    getSearchDB,
    getSearch,
    setSearch,
  }



export {
    actionCreators
};