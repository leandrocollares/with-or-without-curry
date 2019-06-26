import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class Axis extends Component {
  static propTypes = {
    className: PropTypes.string,
    orientation: PropTypes.oneOf(['Bottom', 'Left']),
    scale: PropTypes.func,
    xTransform: PropTypes.number,
    yTransform: PropTypes.number,
    label: PropTypes.string,
  };

  axisRef = React.createRef();

  componentDidMount() {
    this.createAxis();
  }

  componentDidUpdate(prevProps) {
    const { scale } = this.props;
    if (
      JSON.stringify(prevProps.scale.domain())
      !== JSON.stringify(scale.domain())
    ) { this.createAxis(); }
  }

  get labelPos() {
    const { orientation, scale } = this.props;

    switch (orientation) {
      case 'Bottom':
        return { x: scale.range()[1] - 75, y: 40 };
      case 'Left':
        return { x: 5, y: 4 };
      default:
        return null;
    }
  }

  createAxis() {
    const { orientation, scale } = this.props;
    d3.select(this.axisRef.current).call(d3[`axis${orientation}`](scale));
  }

  render() {
    const {
      className, xTransform, yTransform, label,
    } = this.props;

    return (
      <g
        className={className}
        ref={this.axisRef}
        transform={`translate(${xTransform}, ${yTransform})`}
      >
        <text {...this.labelPos} className="axisLabel">
          {label}
        </text>
      </g>
    );
  }
}

export default Axis;
