import logo from './logo.svg';

import  {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
            <BrowserRouter>
                <ConnectedRouter history={history}>
                안녕하세요 newneek입니다!!
                </ConnectedRouter>
            </BrowserRouter>
        </React.Fragment>
  );
}

export default App;
