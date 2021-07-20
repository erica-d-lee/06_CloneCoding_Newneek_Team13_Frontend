import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";
import {Route} from "react-router-dom";
import {history} from "../redux/configureStore";




function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                    <Route path="/" exact component={Main}/>
                    <Route path="/category/:category" exact component={CategoryNews}/>
                    <Route path="/search" exact component={Search}/>
                    <Route path="/search/:keyword" exact component={SearchNews}/>
                    <Route path="/detailnews/:id" exact component={DetailNews}/>
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
