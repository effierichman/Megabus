import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import BookForm from './components/bookForm'
import BookTrips from './components/bookTrips'
import HelpButton from './components/helpButton'
import Help from './components/help'

function App() {
  return (
    <React.Fragment>
          <Header />
          <HelpButton />
          <Route exact path="/" component={BookForm} />
          <Route exact path="/trips" component={BookTrips} />
          <Route exact path="/help" component={Help} />
     </React.Fragment>
  );
}

export default App;
