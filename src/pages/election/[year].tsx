import type { GetStaticPaths, InferGetStaticPropsType } from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type IYearUrl = {
  year: string;
};

export const getStaticPaths: GetStaticPaths<IYearUrl> = async () => {
  return {
    paths: ['1999', '2003', '2007', '2011', '2015', '2019', '2023'].map(
      (elem) => ({
        params: { year: `${elem}` },
      })
    ),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { year: string };
}) => {
  return {
    props: {
      slug: params!.year,
    },
  };
};

const Year = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <h1 className="capitalize">{props.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
    </Main>
  );
};

export default Year;
