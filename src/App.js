import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from "./web-pages/main-page";
import Footer from './components/Footer/Footer';
import CreateTask from './web-pages/CreateTask';
import SearchTask from './web-pages/SearchTask';
import Performers from './web-pages/Performers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />

          <Route path='/createTask' exact component={CreateTask} />

          <Route path='/searchTask' exact component={SearchTask} />
          <Route path='/performers' exact component={Performers} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
