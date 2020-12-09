import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import AskQuestionPage from './pages/askquestionpage';
import HomePage from './pages/homepage';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/AskQuestion' component={AskQuestionPage}/>
      <Route exact path='/:id' component={HomePage} />
      <Route exact path='/' component={HomePage} />
    </Switch>
    </div>
  );
}


export default App;
