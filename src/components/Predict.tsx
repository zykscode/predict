import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import React from 'react';

import type { Candidate } from '@/lib/types';

import Map from './Maps';
import Options from './Options';
import ParliamentChart from './ParliamentChart';

type Props = {
  data: FeatureCollection<Geometry, GeoJsonProperties>;
  candidates: Candidate[];
};

export default function Predict({ data, candidates }: Props) {
  const germanBundestag = {
    linke: {
      seats: 64,
      colour: '#a08',
    },
    spd: {
      seats: 193,
      colour: '#e02',
    },
    gruene: {
      seats: 63,
      colour: '#0b2',
    },
    union: {
      seats: 311,
      colour: '#333',
    },
  };

  return (
    <div className="flex min-h-screen flex-col-reverse justify-center lg:flex-row">
      <div className="container relative lg:h-[800px] lg:w-[800px]">
        <Map data={data} />
        <Options candidates={candidates} />
      </div>
      <div className=" h-10 w-10 bg-blue-500">
        <ParliamentChart party={germanBundestag} seatCount={true} />
      </div>
    </div>
  );
}
