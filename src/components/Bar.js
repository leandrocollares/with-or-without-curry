import React from 'react';
import PropTypes from 'prop-types';

const Bar = (props) => {
  const {
    x, y, width, height, fill, ...otherProps
  } = props;
  return (
    <rect
      className="rect"
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      {...otherProps}
    />
  );
};

Bar.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default Bar;
