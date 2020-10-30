import React from 'react';
import './App.css';
import QuestionForm from './components/QuestionForm';
import Home from './components/Home';
import {
  Switch,
  Route,
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
