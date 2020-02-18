import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import BookForm from './components/bookForm'
import BookTrips from './components/bookTrips'

function App() {
  return (
    <React.Fragment>
          <Header />
          <Route exact path="/" component={BookForm} />
          <Route exact path="/trips" component={BookTrips} />
     </React.Fragment>
  );
}

export default App;
