import React from 'react';
import  {Search, CategoryNews, DetailNews, Main, SearchNews} from "../pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Card from '../components/Card';

function App() {
  return (
    <React.Fragment>
      <Card></Card>
    </React.Fragment>
  );
}

export default App;
