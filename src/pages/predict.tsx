'use client';

import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import React from 'react';

import Map from '@/components/NewMap';
import { presidentialCandidates } from '@/data/candidates';
import state from '@/data/state.json';
import type { Candidate } from '@/lib/types';

function Predict({
  options,
  data,
}: {
  options: Candidate[];
  data: FeatureCollection<Geometry, GeoJsonProperties>;
}) {
  return (
    <div>
      <Map options={options} data={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const filterCandidates = (
    candidates: Candidate[],
    keys: (keyof Candidate)[],
    values: (string | number | null)[][]
  ) => {
    return candidates.filter((candidate) =>
      keys.every((key, index) => {
        const value = candidate[key];
        if (value === undefined) return false;
        return values[index]!.includes(value);
      })
    );
  };
  const key: (keyof Candidate)[] = ['party', 'position'];
  const values = [['PDP', 'APC', 'NNPP', 'LP'], ['Presidential']];
  const candidateData = filterCandidates(presidentialCandidates, key, values);

  return {
    props: {
      options: candidateData,
      data: state,
    },
  };
};

export default Predict;
