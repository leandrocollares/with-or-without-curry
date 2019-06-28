import React, { Component } from 'react';
import _ from 'lodash';
import BarChart from './components/BarChart';
import Histogram from './components/Histogram';
import './App.scss';
import data from './data';

class App extends Component {
  state = {
    filtered: [],
  }

  componentDidMount() {
    this.setState({ filtered: data });
  }

  updateFilter = (brushRange) => {
    if (brushRange) {
      const filtered = _.filter(data, d => d.pointsMadeByCurry >= brushRange[0]
                                && d.pointsMadeByCurry <= brushRange[1]);
      this.setState({ filtered });
    } else {
      this.setState({ filtered: data });
    }
  };

  render() {
    return (
      <div className="app">
        <div>
          <h1>With or without Curry?</h1>
          <p>Intro goes here</p>
        </div>
        <BarChart data={data} {...this.state} />
        <Histogram data={data} {...this.state} updateFilter={this.updateFilter} />
      </div>
    );
  }
}

export default App;
