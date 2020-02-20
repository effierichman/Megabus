import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import BookForm from './components/bookForm'
import BookTrips from './components/bookTrips'
import HelpButton from './components/helpButton'
import Help from './components/help'
import Des from './components/Des'
import Email from './components/Email'
import Greener from './components/Greener'
import MyTrips from './components/MyTrips'
import Map from '../src/./components/Map'
import Notifications from './components/Notifications'
import StupidCat from './components/StupidCat'
import FAQ from './components/FAQ'


function App() {
  return (
    <React.Fragment>
          <Header />
          {/* <HelpButton /> */}
          <Route exact path="/des" component={Des} />
          <Route exact path="/" component={BookTrips} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/greener" component={Greener} />
          <Route exact path="/my-trips" component={MyTrips} />
          <Route exact path="/my-map" component={Map} />
          <Route exact path="/notifications" component={Notifications}/>
          <Route exact path="/stupidcat" component= {StupidCat}/>
          <Route exact path="/FAQ" component={FAQ}/>


     </React.Fragment>
  );
}

export default App;
