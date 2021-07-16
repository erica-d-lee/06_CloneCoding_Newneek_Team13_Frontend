import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";
import {BrowserRouter, Route,} from "react-router-dom";
import {history} from "../redux/configureStore";




function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                    <Route path="/" exact component={Main}/>
                    <Route path="/category" exact component={CategoryNews}/>
                    <Route path="/search/news" exact component={SearchNews}/>
                    <Route path="/detailnews" exact component={DetailNews}/>
                    <Route path="/search" exact component={Search}/>
               </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
