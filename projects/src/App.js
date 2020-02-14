import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ProjectList from './components/ProjectList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectDetails from './components/ProjectDetails';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
         path='/projects/:id'
         render={props => {
           return <ProjectDetails {...props} />
         }}
        />
        <Route path='/' component={ProjectList}/>
      </Switch>
      
    </div>
  );
}

export default App;
