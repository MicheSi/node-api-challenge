import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ProjectList from './components/ProjectList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/projects/:id'/>
        <Route path='/' component={ProjectList}/>
      </Switch>
      
    </div>
  );
}

export default App;
