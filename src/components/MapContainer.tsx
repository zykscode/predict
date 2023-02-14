import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  children: ReactNode;
};

const MapContainer = ({ children }: Props) => {
  return <div className="flex min-h-screen flex-col">{children}</div>;
};

export default MapContainer;
