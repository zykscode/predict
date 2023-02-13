import React, { lazy, Suspense } from 'react';

import type { Candidate } from '@/lib/types';

interface Props {
  candidates: Candidate[];
}

const Options: React.FC<Props> = ({ candidates }) => {
  return (
    <ul className="absolute bottom-0 right-0  w-2/5  bg-pink-300">
      {candidates.map((candidate) => {
        const PartyLogo = lazy(() => import(`./${candidate.party}.tsx`));
        return (
          <li
            className="flex cursor-pointer align-middle text-sm "
            key={candidate.candidateName}
          >
            <Suspense fallback={<div>Loading...</div>}>
              {candidate.candidateName}{' '}
              <div className="h-4 w-4 bg-[var(fg-color-1)]">
                <PartyLogo />
              </div>
            </Suspense>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
