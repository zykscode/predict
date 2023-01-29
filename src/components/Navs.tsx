/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import React from 'react';

import Search from './Search';
import ToggleThemeButton from './ToggleThemeButton';

const isSearchEnabled = true;

const navs = ['home', 'predict', 'contact'];

const Navs = () => {
  // console.log({ todo: 'Navs' });
  return (
    <nav className="nav-header-rhs breadcrumbs">
      {navs.map((nav) => {
        return (
          <Link
            className="breadcrumb button"
            key={nav}
            href={`/${nav === 'home' ? '' : nav}`}
          >
            {nav}
          </Link>
        );
      })}
      <ToggleThemeButton />

      {isSearchEnabled && <Search />}
    </nav>
  );
};

export default Navs;
