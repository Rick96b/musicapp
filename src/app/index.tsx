import React from 'react';
import { withProviders } from "./providers";

import { Routing } from 'pages';
import './styles/index.scss';
import friends from 'shared/friends.mp3'


function App() {
  return (
    <Routing />
  );
}

export default withProviders(App);
