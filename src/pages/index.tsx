import { useEffect, useState } from 'react';

import CountdownContainer from '@/components/CountdownContainer';
import Demography from '@/components/Demography/Demography';
import Predict from '@/components/Predict';
import { presidentialCandidates } from '@/data/candidates';
import mapData from '@/data/state.json';
import { Meta } from '@/layouts/Meta';
import type { Candidate } from '@/lib/types';
import { Main } from '@/templates/Main';

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
      candidates: candidateData,
    },
  };
};

const Index = ({ candidates }: { candidates: Candidate[] }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(mapData);
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Election Prediction"
          description="Predict the winner of each state"
        />
      }
    >
      <div className="w-full bg-red-600">
        <CountdownContainer />
        {data ? (
          <Predict candidates={candidates} data={data} />
        ) : (
          <p>...loading</p>
        )}{' '}
        <Demography />
      </div>
    </Main>
  );
};

export default Index;
