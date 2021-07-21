import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import {Search, CategoryNews, DetailNews, Main, SearchNews,NewsNotFound} from "../pages";
import {Spinner} from '../components';
import {Route} from "react-router-dom";
import {history} from "../redux/configureStore";
import {useSelector} from 'react-redux';

const App = () => {
    const is_loading = useSelector(state => state.news.is_loading);

        return (
            <React.Fragment>
            <ConnectedRouter history={history}>
                    <Route path="/" exact component={Main}/>
                    <Route path="/category/:category" exact component={CategoryNews}/>
                    <Route path="/search" exact component={Search}/>
                    <Route path="/searchnews/:keyword" exact component={SearchNews}/>
                    <Route path="/detailnews/:id" exact component={DetailNews}/>
                    <Route path="/searchnews/notfound/:keyword" exact component={NewsNotFound}/>
            </ConnectedRouter>
            <Spinner visible={is_loading} />
            </React.Fragment>
        )
}

export default App;