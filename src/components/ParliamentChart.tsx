/* eslint-disable import/extensions */
import React from 'react';

import type { Parliament } from '@/lib/types';

import SeatChart from './SeatChart';

const ParliamentChart = ({
  party,
  seatCount,
}: {
  party: Parliament;
  seatCount?: boolean;
}) => {
  return <SeatChart parliament={party} seatCount={seatCount} />;
};

export default ParliamentChart;
