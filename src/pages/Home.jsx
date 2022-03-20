import React from 'react';
import Loadable from 'react-loadable';

const loader = () => <div>Loading...</div>;

const HomeLazy = Loadable({
  loader: () => import('../containers/Main'),
  loading: loader,
});

const Home = () => {
  return <HomeLazy />;
};
export default Home;
