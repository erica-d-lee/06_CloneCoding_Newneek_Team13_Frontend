import {createAction, handleActions} from "redux-actions";
import {produce} from 'immer';
import {history} from '../configureStore';



// 액션타입
const SET_NEWS = 'SET_NEWS';
const DETAIL_NEWS = 'DETAIL_NEWS';
const SET_CATEGORY_NEWS = 'SET_CATEGORY_NEWS';
const SET_SEARCH = 'SET_SEARCH'
const LOADING = 'LOADING';

// 액션생성함수
const setNews = createAction(SET_NEWS, (news_list) => ({news_list}));
const detailNews = createAction(DETAIL_NEWS, (news_list) => ({news_list}));
const setCategoryNews = createAction(
    SET_CATEGORY_NEWS,
    (news_list) => ({news_list})
);
const setSearch = createAction(SET_SEARCH, (news_list) => ({news_list}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


// 기본값 정하기
const initialState = {
    is_loading: false,
    list: [],
};

// 액션함수

const setLoading=()=>{
    return function (dispatch){
        dispatch(loading(true));
    };
};

const setNewsDB = () => { // 메인페이지 뉴스 목록 불러오기
    return function (dispatch) {
        dispatch(loading(true));
        const axios = require('axios');
        axios
            .get('http://15.164.244.197/api/main')
            .then((response) => {
                // console.log(response.data);
                dispatch(setNews(response.data.post));
            })
            .catch((err) => {
                console.log(`메인 페이지 뉴스 불러오기 에러: ${err}`);
            });
    };
};

const setOneNewsDB = (postId) => { // 상세페이지 개별 뉴스 불러오기
    return function (dispatch) {
        dispatch(loading(true));
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

const setCategoryNewsDB = (category) => {    // 카테고리별 뉴스 불러오기
    return function (dispatch) {
        const axios = require('axios');
        dispatch(loading(true));
        axios
            .get(`http://15.164.244.197/api/main?category=${category}`)
            .then((response) => {
                // console.log(response.data);
                dispatch(setCategoryNews(response.data));
            })
            .catch((err) => {
                console.log(`카테고리별 뉴스 불러오기 에러: ${err}`);
            });
    };
};

const sendMail = (email, nickname) => {     // 환영 메일 발송하기
    return function (dispatch) {
        const axios = require('axios');
        axios
            .post('http://15.164.244.197/api/mailing', {
                emailAddress: email,
                nickname: nickname
            })
            .then((response) => {
                // console.log(response.data);
                window.alert('구독 신청이 완료되었습니다');
            })
            .catch((err) => {
                console.log(`환영 메일 발송하기 에러: ${err}`);
            });
    }
}

const setSearchDB = (keyword, sort) => {      // 검색결과 뉴스 불러오기
  return function (dispatch) {
    const axios = require('axios');
    dispatch(loading(true));
    axios
        .get(`http://15.164.244.197/api/search?keyword=${keyword}&sort=${sort}`)
        .then((response) => {
            dispatch(setSearch(response.data.post))
        })
        .catch((err) => {
            if (err.response.status === 403) {dispatch(loading(false));history.push(`/searchnews/notfound/${keyword}`)}

        });
      } 
    };



export default handleActions({
    [SET_NEWS]: (state, action) => produce(state, (draft) => {
        draft.list = [...action.payload.news_list];
        // 통신이 완료되면 스피너 대신 리스트 보기 위해 loading: false
        draft.is_loading = false;
    }),

    [DETAIL_NEWS]: (state, action) => produce(state, (draft) => {
        draft
            .list
            .push(action.payload.news_list);
        draft.is_loading = false;
    }),

    [SET_CATEGORY_NEWS]: (state, action) => produce(state, (draft) => {
        draft.list = [...action.payload.news_list.post];
    }),
    [SET_SEARCH]: (state, action) => produce(state, (draft) => {
      console.log(action.payload.news_list)
        draft.list = [...action.payload.news_list];
        draft.is_loading = false;
    }),

    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),

}, initialState);


// 액션 생성자
const actionCreators = {
    setNewsDB,
    setOneNewsDB,
    setCategoryNewsDB,
    setSearchDB,
    sendMail,
    setLoading,
}

export {
    actionCreators
};