import React from 'react';
import BarChart from './components/BarChart';
import './App.scss';
import data from './data';

function App() {
  return (
    <div className="app">
      <div>
        <h1>With or without Curry?</h1>
        <p>Intro goes here</p>
      </div>
      <BarChart data={data} />
      <div>
        <p>Histogram goes here</p>
      </div>
    </div>
  );
}

export default App;
