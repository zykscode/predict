import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// import React from 'react';
import { states } from '../data/generalData';

interface StateProps {
  state: string;
}

export default function StatePage({ state }: StateProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{state}</h1>
      <p>This is the {state} page.</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = states.map((state) => ({ params: { state } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<StateProps> = async ({
  params,
}) => {
  const state = params?.state as string; // Add type assertion

  return { props: { state } };
};
