import React, { Component } from 'react';
import Buttons from './Buttons'
import DrumPads from './Pads'
import Display from './Display'
import Volume from './Volume'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pads: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
      innerColumns: [1, 2],
      secondColumnRows: [1, 2, 3],
      display: "",
      active: true,
      volume: 50
    }
    this.toggle = this.toggle.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }
  toggle() {
    if (this.state.active === false) {
      return this.setState({ active: true });
    }
    return this.setState({ active: false });
  }

  handleKey(e) {
    this.state.pads.forEach(key => {
        if (e.key.toUpperCase() === key) {
          this.setState({display: document.getElementById(key).parentElement.id})
          this.playAudio(document.getElementById(key));
        }
      });    
    }

  handleClick(e) {
      this.playAudio(e.target.children[0])
      this.setState({ display: e.target.id });
  }

  playAudio(src) {
    src.volume = this.state.volume / 100;
    src.currentTime = 0;
    src.play();
  }

  setVolume(e) {
    this.setState({ volume: e.target.value });
    console.log(this.state.volume)
  }

componentDidMount() {
window.addEventListener("keydown", this.handleKey);
}

  render() {
    let bank;
    this.state.active ? (bank = "bank1") : (bank = "bank2");

    return (
      <div className="container" id="drum-machine">
      <div className="baseRows" id="baseRow-1">
      <h2 className="title">Modern Drum Machine</h2>
      </div>
      <div className="baseRows" id="baseRow-2">
      <DrumPads pads={this.state.pads} bank={bank} click={this.handleClick}/>
      <div className="innerColumns innerColumn-2">
      <Display value={this.state.display}/>
      <Volume volume={this.setVolume}/>
      <Buttons toggle={this.toggle} active={this.state.active}/>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
