import React from 'react';
import BarChart from './components/BarChart';
import Histogram from './components/Histogram';
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
      <Histogram data={data} />
    </div>
  );
}

export default App;
