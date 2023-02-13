import React from 'react';

interface Props {
  width: number;
  height: number;
  radius: number;
  individuals: number;
}

const MySvg: React.FC<Props> = ({ width, height, radius, individuals }) => {
  console.log(radius, individuals);
  return (
    <svg width={width} height={height} viewBox="0 0 100 100">
      <symbol id="seat" viewBox="-12 -12 24 24">
        <path
          d="m-12,0c0,6.629 5.372,12 12,12c6.627,0 12,-5.371 12,-12c0,-6.626 -5.373,-12 -12,-12c-6.628,0 -12,5.374 -12,12z"
          id="svg_1"
        />
      </symbol>
      <g>
        <title>background</title>
        <rect
          x="-1"
          y="-1"
          width={width}
          height={height}
          fill="green"
          stroke="none"
        />
      </g>
      <g>
        <title>Layer 1</title>
        <g id="totals"></g>
      </g>
    </svg>
  );
};

export default MySvg;
