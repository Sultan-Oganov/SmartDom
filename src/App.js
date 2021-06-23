import React, {useState, useEffect} from 'react';
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
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import InfProfile from './components/InfrmProfile/InfProfile'
import ModerChange from './components/ModerChange/ModerChange';
import ConfirmEmail from './components/confirmEmail/ConfirmEmail';
import Calendar from './components/Calendar/Calendar'
import ResetPass from './components/ResetPass/ResetPass'

function App() {
  const [auth, setAuth] = useState(false)
  useEffect(()=>{
    let token = localStorage.getItem('tokensmart')
    if(token != '' && token != null ){
        setAuth(true)
    }else{
      setAuth(false)
  }
})
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/createCalendar" exact component={Calendar} />
            <Route path='/createTask' exact component={CreateTask} />
    
            <Route path='/searchTask' exact component={SearchTask} />

            <Route path='/performers'  component={Performers} />
            <Route path='/performers/:type'  component={Performers} />
            <Route path='/email-confirm/:key' exact component={ConfirmEmail}/>

            <Route path='/services/:name' exact component={Child} />
            
            <Route path='/api/rest-auth/password/reset/confirm/:uid/:token' exact component={ResetPass}/>
            <Route path='/InfProfile' exact component={InfProfile} />

            <Route path='/change' exact component={ModerChange} />
             
              <>
                  <Route path='/my-orders' exact component={MyOrders} />
                  <Route path='/pays' exact component={Pay} />
                  <Route path='/profile' exact component={Profile} />
              </>
            

            

          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
