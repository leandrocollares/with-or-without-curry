import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import legend from 'd3-svg-legend';

class Legend extends Component {
  static propTypes = {
    shapeWidth: PropTypes.number,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    scale: PropTypes.func,
    legendXTransform: PropTypes.number,
    legendYTransform: PropTypes.number,
  };

  legendRef = React.createRef();

  componentDidMount() {
    this.createLegend();
  }

  createLegend() {
    const { shapeWidth, orientation, scale } = this.props;
    d3.select(this.legendRef.current).call(
      legend
        .legendColor()
        .shapeWidth(shapeWidth)
        .orient(orientation)
        .scale(scale),
    );
  }

  render() {
    const { legendXTransform, legendYTransform } = this.props;

    return (
      <g
        className="legend"
        ref={this.legendRef}
        transform={`translate(${legendXTransform}, ${legendYTransform})`}
      />
    );
  }
}

export default Legend;
