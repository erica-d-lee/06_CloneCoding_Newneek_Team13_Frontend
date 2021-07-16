import React from 'react';
import {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";
import {BrowserRouter, Route,} from "react-router-dom";
import {Router} from "react-router";
import {history} from "../redux/configureStore";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Router history={history}>
                    <Route path="/" exact component={Main}/>
                    <Route path="/category/" exact component={CategoryNews}/>
                    <Route path="/search/news/" exact component={SearchNews}/>
                    <Route path="/detailnews/" exact component={DetailNews}/>
                    <Route path="/search" exact component={Search}/>
                </Router>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
