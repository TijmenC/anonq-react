import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionForm from './components/QuestionForm';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={QuestionForm}/>
        </Switch>
        </Router>
    </div>
  );
}


export default App;
