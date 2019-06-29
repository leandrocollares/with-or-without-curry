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
        <div className="intro">
          <h1>With or without Curry?</h1>
          <p>
            The bar chart displays the point difference in each Golden State
            Warriors game of the 2018-19 regular season. Hover over bars for
            further information. The histogram shows the number of games in
            which Curry&#39;s performance was within each point range. Select
            any point interval in the histogram to make the bar chart display
            games in which the number of points made by Curry fell within
            that interval.
          </p>
          <p>
            Data source:
            {' '}
            <a
              href="https://www.basketball-reference.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            Basketball Reference
            </a>
          </p>
        </div>
        <BarChart data={data} {...this.state} />
        <Histogram data={data} {...this.state} updateFilter={this.updateFilter} />
      </div>
    );
  }
}

export default App;
