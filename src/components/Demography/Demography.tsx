import { FaFemale } from '@react-icons/all-files/fa/FaFemale';
import { FaMale } from '@react-icons/all-files/fa/FaMale';
import React from 'react';

import { demograph } from '@/data/makeup';

import Donut from '../Donut';

function Demography() {
  return (
    <div className="flex w-full flex-col justify-center bg-[var(--blue-background)]">
      <Donut
        className="container mx-auto bg-green-400 p-2"
        data={demograph.occupation}
      />
      <Donut data={demograph.gender} title="Gender" />
      <Donut
        className="mx-auto max-w-sm bg-green-400 p-2"
        data={demograph.age}
        title="Gender"
      />
      <FaMale />
      <FaFemale />
    </div>
  );
}

export default Demography;
