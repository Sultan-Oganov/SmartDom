import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from "./web-pages/main-page";
import Footer from './components/Footer/Footer';
import CreateTask from './web-pages/CreateTask';
import SearchTask from './web-pages/SearchTask';
import Performers from './web-pages/Performers';
import MyOrders from './web-pages/MyOrders';
import Pay from './components/Orders/Pays/Pay';
import Profile from './web-pages/Profile';
import Child from './components/ServicesPages/Child/Child'
import Kitchen from './components/ServicesPages/Kitchen/Kitchen'
import Home from './components/ServicesPages/Home/Home'
import Medicine from './components/ServicesPages/Medicine/Medicine'
import Grand from './components/ServicesPages/Grand/Grand'
import Beautiful from './components/ServicesPages/Beautiful/Beautiful'
import Drivers from './components/ServicesPages/Drivers/Drivers'
import Courier from './components/ServicesPages/Courier/Courier'

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

          <Route path='/my-orders' exact component={MyOrders} />
          <Route path='/pays' exact component={Pay} />

          <Route path='/profile' exact component={Profile} />

          <Route path='/Child' exact component={Child} />
          <Route path='/Kitchen' exact component={Kitchen} />
          <Route path='/Home' exact component={Home} />
          <Route path='/Medicine' exact component={Medicine} />
          <Route path='/Grand' exact component={Grand} />
          <Route path='/Beautiful' exact component={Beautiful} />
          <Route path='/Drivers' exact component={Drivers} />
          <Route path='/Courier' exact component={Courier} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
