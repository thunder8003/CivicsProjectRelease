import logo from './logo.svg';
import './App.css';
import React from 'react';

import Mainmenu from './components/mainmenu.js';
import Singleplayer from './components/singleplayer.js';
import Multiplayer from './components/multiplayerHandler.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: "mainmenu"
    }
  }

  setSingleplayer = () => {
    this.setState({ menuStatus: "singleplayer" })
  }

  setMultiplayer = () => {
    this.setState({ menuStatus: "multiplayer" })
  }

  setMainMenu = () => {
    this.setState({ menuStatus: "mainmenu"})
  }

  render() {
    switch(this.state.menuStatus){

      case "mainmenu": {
        return (
          <Mainmenu setSingleplayer={this.setSingleplayer} setMultiplayer={this.setMultiplayer} />
        )
      }

      case "singleplayer": {
        return (
          <Singleplayer ReturnToMenu={() => this.setMainMenu()}  />
        )
      }

      case "multiplayer": {
        return(
          <Multiplayer />
        )
      }

      default: {
        return (
          <div>
            No Directory Here :(
          </div>
        )
      }
    }
  }
}

export default App;
