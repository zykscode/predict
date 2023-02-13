import React from 'react';

type Props = {
  name: string;
  party: string;
  position: string;
  constituency: string;
  age?: number;
  gender?: string;
  qaulifiications?: string;
};

function Candidate({ name, party, constituency }: Props) {
  console.log(party, constituency);
  return <div>{name}</div>;
}

export default Candidate;
