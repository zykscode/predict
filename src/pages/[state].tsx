// pages/[state].js
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { states, tabsNav } from '@/data/generalData';

interface StateProps {
  state: string;
}

interface TabProps {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

interface TabsProps {
  tabs: { label: string; href: string }[];
}

function Tab({ label, href, isActive }: TabProps) {
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </li>
  );
}

function Tabs({ tabs }: TabsProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  function handleTabClick(index: number) {
    setActiveIndex(index);
    router.push(tabs[index]!.href);
  }

  return (
    <ul>
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          label={tab.label}
          href={`/${router.query.state}${tab.href}`}
          isActive={i === activeIndex}
          onClick={() => handleTabClick(i)}
        />
      ))}
    </ul>
  );
}

function StatePage({ state }: StateProps) {
  return (
    <>
      <Tabs tabs={tabsNav} />
      <h1>{state} Page</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const state = (params?.state as string).toLowerCase();
  const data = { state };

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = states.flatMap((state) =>
    tabsNav.map((tab) => ({
      params: { state: state.toLowerCase(), slug: tab.href.split('/') },
    }))
  );

  return { paths, fallback: false };
};

export default StatePage;
