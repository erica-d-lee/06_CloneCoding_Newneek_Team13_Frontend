import React from 'react';
import {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";
import {BrowserRouter, Route,} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configureStore";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                    <Route exact="exact" path="/" component={Main}/>
                    <Route path="/category/" exact="exact" component={CategoryNews}/>
                    <Route path="/search/news/" exact="exact" component={SearchNews}/>
                    <Route path="/detailnews/" exact="exact" component={DetailNews}/>
                    <Route exact="exact" path="/search" component={Search}/>
                </ConnectedRouter>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
