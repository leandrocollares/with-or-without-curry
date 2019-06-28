import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import Axis from './Axis';
import Bar from './Bar';

const margin = {
  top: 10, right: 30, bottom: 45, left: 30,
};
const width = 500 - margin.left - margin.right;
const height = 170 - margin.top - margin.bottom;

const colour = '#be3a34';
const numberOfThresholds = 9;

class Histogram extends Component {
  static propTypes = {
    updateFilter: PropTypes.func,
  };

  state = {
    bars: [],
    xScale: null,
    yScale: null,
  }

  brushRef = React.createRef();

  static getDerivedStateFromProps(nextProps) {
    const { data, filtered } = nextProps;

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.pointsMadeByCurry))
      .range([0, width])
      .nice(numberOfThresholds);

    const binGenerator = d3
      .histogram()
      .domain(xScale.domain())
      .thresholds(xScale.ticks(numberOfThresholds))
      .value(d => d.pointsMadeByCurry);

    let bins = binGenerator(data);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height, 0])
      .nice();

    bins = binGenerator(filtered);

    const bars = bins.map(d => ({
      x: xScale(d.x0),
      y: yScale(d.length),
      height: height - yScale(d.length),
      width: xScale(d.x1) - xScale(d.x0),
    }));

    return { bars, xScale, yScale };
  }

  componentDidMount() {
    this.brush = d3
      .brushX()
      .extent([[0, 0], [width, height]])
      .on('end', this.brushEnd);

    d3.select(this.brushRef.current).call(this.brush);
  }

  brushEnd = () => {
    let bounds = null;

    const { xScale } = this.state;

    const { updateFilter } = this.props;

    if (d3.event.selection) {
      const [x1, x2] = d3.event.selection;
      bounds = [xScale.invert(x1), xScale.invert(x2)];
    }
    updateFilter(bounds);
  };

  render() {
    const { bars, xScale, yScale } = this.state;

    return (
      <div className="histogram">
        <svg
          className="chart"
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {bars.map(d => (
              <Bar
                key={d.x}
                x={d.x}
                y={d.y}
                width={d.width}
                height={d.height}
                fill={colour}
              />
            ))}
            <Axis
              className="histogramXAxis"
              orientation="Bottom"
              scale={xScale}
              xTransform={0}
              yTransform={height}
              label="points made by Curry"
            />
            <Axis
              className="histogramYAxis"
              orientation="Left"
              scale={yScale}
              xTransform={0}
              yTransform={0}
              label="number of games"
            />
            <g ref={this.brushRef} className="brush" />
          </g>
        </svg>
      </div>
    );
  }
}

export default Histogram;
