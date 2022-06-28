import React, { Fragment } from 'react';
import Repos from '../Repos/Repos';
import Search from '../Repos/Search';

export default function Home() {
  return (
    <Fragment>
      <Search />
      <Repos />
    </Fragment>
  );
}
