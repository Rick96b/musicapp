import React, {useEffect} from 'react';
import { withProviders } from "./providers";
import useSound from 'use-sound';

import { Routing } from 'pages';
import './styles/index.scss';
import friends from 'shared/friends.mp3'


function App() {
  const [play, { pause, duration, sound }] = useSound(friends);

  useEffect(() => {
    play()
  })

  return (
    <Routing />
  );
}

export default withProviders(App);
