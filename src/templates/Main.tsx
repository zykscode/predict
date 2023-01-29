/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ children, meta }: IMainProps) => (
  <div className="page-scroller antialiased">
    {meta}
    <main className="page full-page index-page">{children}</main>
  </div>
);

export { Main };
