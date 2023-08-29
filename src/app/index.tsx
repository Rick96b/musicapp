import React from 'react';
import { withProviders } from "./providers";

import { Routing } from 'pages';
import './styles/index.scss';
import TrackHandler from './trackHandler';


function App() {
  return (
    <>
      <Routing />
      <TrackHandler />
    </>

  );
}

export default withProviders(App);
