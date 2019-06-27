import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
  const {
    hovered, xScale, yScale, marginLeft, marginTop,
  } = props;

  const {
    gameNumber, date, venue, opponent, score,
    win, difference, pointsMadeByCurry,
  } = hovered;

  const x = xScale(gameNumber) + xScale.bandwidth() / 2 + marginLeft;

  const y = yScale(difference) + marginTop;

  const styles = {
    transform:
      'translate('
      + `calc( -50% + ${x}px),`
      + `calc(-100% + ${y}px)`
      + ')',
  };

  return (
    <div className="tooltip" style={styles}>
      <div className="tooltipGame">
        game
        {' '}
        {gameNumber}
        :
        {' '}
        <span className={win ? 'gameWon' : 'gameLost'}>
          {difference}
        </span>
      </div>
      <div>{date}</div>
      <div>
        {venue}
        {' '}
        {opponent}
      </div>
      <div>{score}</div>
      {pointsMadeByCurry !== 0 ? (
        <div>
          Curry made
          {' '}
          {pointsMadeByCurry}
          {' '}
          points
        </div>
      ) : (
        <div> Curry did not play </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  hovered: PropTypes.shape({
    gameNumber: PropTypes.number,
    date: PropTypes.string,
    venue: PropTypes.string,
    opponent: PropTypes.string,
    score: PropTypes.string,
    win: PropTypes.bool,
    difference: PropTypes.number,
    pointsMadeByCurry: PropTypes.number,
  }),
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
};

export default Tooltip;
