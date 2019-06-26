import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import Axis from './Axis';
import Bar from './Bar';
import Legend from './Legend';

const margin = {
  top: 10, right: 30, bottom: 90, left: 30,
};
const width = 1300 - margin.left - margin.right;
const height = 280 - margin.top - margin.bottom;

const colours = ['#006bb6', '#fdb927'];

const legendScale = d3
  .scaleOrdinal()
  .domain(['win', 'loss'])
  .range(colours);


class BarChart extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      gameNumber: PropTypes.number,
      date: PropTypes.string,
      venue: PropTypes.string,
      opponent: PropTypes.string,
      score: PropTypes.string,
      win: PropTypes.bool,
      difference: PropTypes.number,
      pointsMadeByCurry: PropTypes.number,
    })),
  };

  render() {
    const { data } = this.props;

    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.gameNumber))
      .rangeRound([0, width])
      .padding(0.05);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.difference)])
      .rangeRound([height, 0])
      .nice();

    return (
      <div className="barChart">
        <svg
          className="chart"
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {data.map(d => (
              <Bar
                key={d.gameNumber}
                x={xScale(d.gameNumber)}
                y={yScale(d.difference)}
                width={xScale.bandwidth()}
                height={height - yScale(d.difference)}
                fill={d.win ? colours[0] : colours[1]}
              />
            ))}
            <Axis
              className="xAxis"
              orientation="Bottom"
              scale={xScale}
              xTransform={0}
              yTransform={height}
              label="game number"
            />
            <Axis
              className="yAxis"
              orientation="Left"
              xTransform={0}
              yTransform={0}
              scale={yScale}
              label="point difference"
            />
            <Legend
              orientation="horizontal"
              scale={legendScale}
              shapeWidth={25}
              legendXTransform={width / 2 - 25}
              legendYTransform={height + 50}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default BarChart;
