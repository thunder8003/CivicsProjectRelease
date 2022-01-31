import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BackgroundParticles from './particles/StartParticles.js';

import Particles from 'react-tsparticles';

import 'bootstrap/dist/css/bootstrap.min.css';

const musicURL = "https://vgmsite.com/soundtracks/kahoot-soundtrack/zhcpjslrzb/Ghost%20Mode%20Lobby%20Music.mp3"

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <audio id="kahoot_music" src={musicURL} loop="loop" />
    <Particles id="background-particles" options={BackgroundParticles} />
    <App />
  </React.StrictMode>,
  root
);

function startMusic() {
  const music = document.getElementById("kahoot_music")
  music.volume = .2;
  music.play();
  root.removeEventListener('mousedown',startMusic,true);
}

root.addEventListener('mousedown',startMusic,true);