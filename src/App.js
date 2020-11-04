import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import AskQuestionPage from './Pages/AskQuestionPage';
import HomePage from './Pages/HomePage';

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
