import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
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
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/QuestionForm' component={QuestionForm}/>
    </Switch>
    </div>
  );
}


export default App;
