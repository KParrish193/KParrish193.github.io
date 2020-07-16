import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing'
import './App.css';

function App() {
  return (
    <div className="App">


      <div>
        <Route exact path="/" component={Landing} />
      </div>
    </div>
  );
}

export default App;
