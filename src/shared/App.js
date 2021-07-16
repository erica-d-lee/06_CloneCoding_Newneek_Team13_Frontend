import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import {history} from "../redux/configureStore";
import {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";
import {Route,} from "react-router-dom";



function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
              <Route path="/search/news"  exact component={SearchNews}/>
              <Route path="/search" exact component={Search}/>
              <Route path="/"  exact component={Main}/>
              <Route path="/category"  exact component={CategoryNews}/>
              <Route path="/detailnews"  exact component={DetailNews}/>
           </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
