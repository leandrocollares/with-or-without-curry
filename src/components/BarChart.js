import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnnotationBracket, AnnotationLabel } from 'react-annotation';
import * as d3 from 'd3';
import Axis from './Axis';
import Bar from './Bar';
import Legend from './Legend';
import Tooltip from './Tooltip';

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
    filtered: PropTypes.arrayOf(PropTypes.shape({
      gameNumber: PropTypes.number,
      date: PropTypes.string,
      venue: PropTypes.string,
      opponent: PropTypes.string,
      score: PropTypes.string,
      win: PropTypes.bool,
      difference: PropTypes.number,
      pointsMadeByCurry: PropTypes.number,
    })),
    showAnnotations: PropTypes.bool,
  };

  state = {
    hovered: null,
    xScale: null,
    yScale: null,
  };

  onBarHover = bar => () => {
    this.setState({ hovered: bar });
  };

  static getDerivedStateFromProps(nextProps) {
    const { data } = nextProps;

    if (!data.length) return {};

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

    return { xScale, yScale };
  }

  render() {
    const { xScale, yScale, hovered } = this.state;
    const { filtered, showAnnotations } = this.props;

    if (!xScale || !yScale) return null;

    return (
      <div className="barChart">
        <svg
          className="chart"
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {filtered.map(d => (
              <Bar
                key={d.gameNumber}
                x={xScale(d.gameNumber)}
                y={yScale(d.difference)}
                width={xScale.bandwidth()}
                height={height - yScale(d.difference)}
                fill={d.win ? colours[0] : colours[1]}
                onMouseEnter={this.onBarHover(d)}
                onMouseLeave={this.onBarHover(null)}
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
              scale={yScale}
              xTransform={0}
              yTransform={0}
              label="point difference"
            />
            <Legend
              orientation="horizontal"
              scale={legendScale}
              shapeWidth={25}
              legendXTransform={width / 2 - 25}
              legendYTransform={height + 50}
            />
            {showAnnotations ? (
              <>
                <AnnotationBracket
                  x={xScale(13)}
                  y={height + 20}
                  note={{
                    label: 'Curry did not play',
                    lineType: null,
                    align: 'middle',
                    padding: 5,
                  }}
                  connector={{ type: 'elbow', end: null }}
                  subject={{ width: xScale(24) - xScale(13), type: 'square' }}
                />
                <AnnotationLabel
                  x={xScale(72) + xScale.bandwidth() / 2}
                  y={height + 20}
                  dy={17}
                  note={{
                    label: 'Curry did not play',
                    lineType: null,
                    align: 'middle',
                    padding: 5,
                    orientation: 'topBottom',
                  }}
                />
                <AnnotationLabel
                  x={xScale(82) + xScale.bandwidth() / 2}
                  y={yScale(15) - 3}
                  dy={-45}
                  note={{
                    label: 'Curry did not play',
                    lineType: null,
                    align: 'middle',
                    padding: 7,
                    orientation: 'topBottom',
                  }}
                />
              </>
            ) : null}
          </g>
        </svg>
        {hovered ? (
          <Tooltip
            hovered={hovered}
            xScale={xScale}
            yScale={yScale}
            marginLeft={margin.left}
            marginTop={margin.top}
          />
        ) : null}
      </div>
    );
  }
}

export default BarChart;
