import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Protfolio from './components/protfolio/Protfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/protfolio" component={Protfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}


export default App;