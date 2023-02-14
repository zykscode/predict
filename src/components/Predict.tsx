import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import React from 'react';

import type { Candidate } from '@/lib/types';

import Map from './Maps';
import Options from './Options';

type Props = {
  data: FeatureCollection<Geometry, GeoJsonProperties>;
  candidates: Candidate[];
};

export default function Predict({ data, candidates }: Props) {
  return (
    <div className="container relative lg:h-[800px] lg:w-[800px]">
      <Map data={data} />
      <Options candidates={candidates} />
    </div>
  );
}
