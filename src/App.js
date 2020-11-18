import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import AskQuestionPage from './pages/AskQuestionPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/AskQuestion' component={AskQuestionPage}/>
    </Switch>
    </div>
  );
}


export default App;
